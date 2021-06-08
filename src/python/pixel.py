from PIL import Image

from win32api import GetSystemMetrics
from collections import Counter
import numpy as np
import matplotlib.pyplot as plt; plt.rcdefaults()

import time
import sys
import os
import random

import json
from io import StringIO
io = StringIO()

np.set_printoptions(threshold=sys.maxsize)

filename = "squid"
cwd = os.getcwd()

im1 = Image.open(filename + '.png', 'r')

printScanlines = False
multiplier = 15
scanlines = int(multiplier * 0.1)

# You can turn black scanlines on or off with the printScanlines flag
#     Scanline depth is dictated by the scaling multiplier
if printScanlines == True:
    print("Scanline Depth: " + str(scanlines))

results = {}

color = (200, 200, 200, 200);

numpy_pixel = np.array(im1)
width, height = im1.size
print("width: " + str(width) + " height: " + str(height))

#
results['filename'] = filename + ".png"
results['baseFilename'] = filename
results['originalSpriteHeight'] = height
results['originalSpriteWidth'] = width
results['totalPixelsOriginal'] = width * height
results['scaledSpriteHeight'] = height * multiplier
results['scaledSpriteWidth'] = width * multiplier
results['totalPixelsScaled'] = ((width * multiplier) * (height * multiplier))

targetWidth = width * multiplier
targetHeight = height * multiplier

jumper = 0

start = time.time()

target = np.full(((height * multiplier), width, 4), 0)

for x in range(0, height):

    for d in range(0, multiplier):
        target[jumper + d] = numpy_pixel[x]

    jumper += multiplier

print("shape: ")
print(numpy_pixel.shape)

topLeft = numpy_pixel[0][0]
topRight= numpy_pixel[0][width - 1]
bottomLeft = numpy_pixel[height - 1][0]
bottomRight = numpy_pixel[height - 1][width - 1]

print(topLeft)
print(topRight)
print(bottomLeft)
print(bottomRight)

cornerCheck = 0
if topLeft[0] == topRight[0] and topLeft[1] == topRight[1] and topLeft[2] == topRight[2]:
    cornerCheck += 1
if topLeft[0] == bottomLeft[0] and topLeft[1] == bottomLeft[1] and topLeft[2] == bottomLeft[2]:
    cornerCheck += 1
if topLeft[0] == bottomRight[0] and topLeft[1] == bottomRight[1] and topLeft[2] == bottomRight[2]:
    cornerCheck += 1

cornerColor = (topLeft[0], topLeft[1], topLeft[2])
cornerColor = '#%02x%02x%02x' % cornerColor

target2 = np.full(((height * multiplier), (width * multiplier), 4), 0)

dupePixel = 0

for x in range(0, (height * multiplier)):
    for y in range(0, (width)):
        for z in range(0, multiplier):
            target2[x][dupePixel] = target[x][y]
            dupePixel += 1
    dupePixel = 0

target3 = np.full(((height * multiplier), (width * multiplier), 4), 0)

if printScanlines == True:
    count = 0
    for x in range(0, (height * multiplier)):
        if count > (multiplier - scanlines):
            for y in range(0, (width * multiplier)):
                target2[x][y][0] = 0
                target2[x][y][1] = 0
                target2[x][y][2] = 0
                target2[x][y][3] = 255
        if count == multiplier:
            count = 0
        else:
            count += 1

#finalFilename = filename + str(random.randint(0,9999))
finalFilename = filename + "_" + str(width * multiplier) + "x" + str(height * multiplier)
resultim2 = Image.fromarray(target2.astype('uint8'))
resultim2.save(finalFilename + '.png')

colorHash = {}
uniqueColors = 0
allColors = []
allColorsHex = []
hexColors = []
uniqueColorsList = []
uniqueColorsTuples = []

for x in numpy_pixel:
    for y in x:
        strRGB = str(y[0]) + "," + str(y[1]) + "," + str(y[2])
        tupRGB = (y[0],y[1],y[2])
        allColors.append(strRGB)
        allColorsHex.append('#%02x%02x%02x' % tupRGB)
        if(strRGB not in colorHash):
            colorHash[strRGB] = tupRGB
            uniqueColorsList.append(strRGB)
            uniqueColorsTuples.append(tupRGB)
            uniqueColors = uniqueColors + 1

results['uniqueRGBColors'] = uniqueColorsList
for x in uniqueColorsTuples:
    hexColors.append('#%02x%02x%02x' % x)

results['uniqueHexColors'] = hexColors
colorDistribution = Counter(allColors)
colorDistributionHex = Counter(allColorsHex)

cnt = 0
colorDistributionHex = {}

orderedColors = []
for x in Counter(allColorsHex):
    orderedColors.append(x)

for x in Counter(allColorsHex).values():
    colorDistributionHex[orderedColors[cnt]] = x
    cnt+=1

colorDistributionHex = sorted(colorDistributionHex.items(), key=lambda x: (-x[1], x[0]))

results['colorDistributionHex'] = colorDistributionHex
results['scalingFactor'] = multiplier

scaledColorDistributionHex = []

print("============================================================")
print("Total number of unique colors: " + str(len(uniqueColorsList)))
print("Total number of pixels: " + str((width * height)))
print("Color total distribution: " + str(Counter(allColors)))
print("uniqueColorsTuples: " + str(uniqueColorsTuples))
print("hexColors: " + str(hexColors))
print("============================================================")

end = time.time()
print("Total elapsed time: " + str(round((end - start), 2)))

chartColor = []
chartCount = []
colorDistrib = {}

for x in colorDistributionHex:
    chartColor.append(x[0])
    chartCount.append(x[1])
    colorDistrib[x[0]] = x[1]

colorDistributionHex = colorDistrib
results['colorDistributionHex'] = colorDistributionHex
idx = 0
if cornerCheck > 1:#chartColor[0] == "#000000":
    for x in chartColor:
        if x == cornerColor:
            results['backgroundColor'] = chartColor[idx]
            chartColor.pop(idx)
            chartCount.pop(idx)
        idx += 1
else:
    results['backgroundColor'] = chartColor[0]
    chartColor.pop(0)
    chartCount.pop(0)

results['chartColor'] = chartColor
results['chartCount'] = chartCount

print("results: " + str(results))

ypos = np.arange(len(chartColor))

plt.xticks(ypos, chartColor)
plt.xlabel = "Color Value (hexidecimal)"
plt.ylabel = "Number of occurances"
barlist = plt.bar(ypos, chartCount)

json.dump(results, io)


text_file = open(filename + "_results.json", "w")
text_file.write(io.getvalue())
text_file.close()

ind = 0
for x in chartColor:
    barlist[ind].set_color(x)
    ind += 1
plt.show()


