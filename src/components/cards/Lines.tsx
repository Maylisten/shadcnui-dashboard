"use client"
import {ResponsiveLine} from '@nivo/line'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const data = [
  {
    "id": "japan",
    "color": "hsl(82, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 99
      },
      {
        "x": "helicopter",
        "y": 46
      },
      {
        "x": "boat",
        "y": 253
      },
      {
        "x": "train",
        "y": 83
      },
      {
        "x": "subway",
        "y": 37
      },
      {
        "x": "bus",
        "y": 227
      },
      {
        "x": "car",
        "y": 52
      },
      {
        "x": "moto",
        "y": 108
      },
      {
        "x": "bicycle",
        "y": 28
      },
      {
        "x": "horse",
        "y": 258
      },
      {
        "x": "skateboard",
        "y": 192
      },
      {
        "x": "others",
        "y": 191
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(172, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 33
      },
      {
        "x": "helicopter",
        "y": 238
      },
      {
        "x": "boat",
        "y": 292
      },
      {
        "x": "train",
        "y": 131
      },
      {
        "x": "subway",
        "y": 285
      },
      {
        "x": "bus",
        "y": 138
      },
      {
        "x": "car",
        "y": 196
      },
      {
        "x": "moto",
        "y": 74
      },
      {
        "x": "bicycle",
        "y": 198
      },
      {
        "x": "horse",
        "y": 25
      },
      {
        "x": "skateboard",
        "y": 145
      },
      {
        "x": "others",
        "y": 278
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(202, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 31
      },
      {
        "x": "helicopter",
        "y": 114
      },
      {
        "x": "boat",
        "y": 106
      },
      {
        "x": "train",
        "y": 229
      },
      {
        "x": "subway",
        "y": 133
      },
      {
        "x": "bus",
        "y": 278
      },
      {
        "x": "car",
        "y": 56
      },
      {
        "x": "moto",
        "y": 145
      },
      {
        "x": "bicycle",
        "y": 269
      },
      {
        "x": "horse",
        "y": 139
      },
      {
        "x": "skateboard",
        "y": 88
      },
      {
        "x": "others",
        "y": 60
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(208, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 257
      },
      {
        "x": "helicopter",
        "y": 16
      },
      {
        "x": "boat",
        "y": 107
      },
      {
        "x": "train",
        "y": 116
      },
      {
        "x": "subway",
        "y": 164
      },
      {
        "x": "bus",
        "y": 82
      },
      {
        "x": "car",
        "y": 166
      },
      {
        "x": "moto",
        "y": 70
      },
      {
        "x": "bicycle",
        "y": 126
      },
      {
        "x": "horse",
        "y": 145
      },
      {
        "x": "skateboard",
        "y": 268
      },
      {
        "x": "others",
        "y": 201
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(240, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 252
      },
      {
        "x": "helicopter",
        "y": 40
      },
      {
        "x": "boat",
        "y": 50
      },
      {
        "x": "train",
        "y": 248
      },
      {
        "x": "subway",
        "y": 236
      },
      {
        "x": "bus",
        "y": 15
      },
      {
        "x": "car",
        "y": 241
      },
      {
        "x": "moto",
        "y": 228
      },
      {
        "x": "bicycle",
        "y": 120
      },
      {
        "x": "horse",
        "y": 59
      },
      {
        "x": "skateboard",
        "y": 232
      },
      {
        "x": "others",
        "y": 209
      }
    ]
  }
]

export function Lines() {
  return (
    <Card className="h-full w-full flex flex-col">
      <CardHeader className="h-[100px]">
        <CardTitle>Lines</CardTitle>
        <CardDescription>There are the status of this year.</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex-1">
        <div className="h-full w-full">
          <ResponsiveLine
            data={data}
            margin={{top: 20, right: 100, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle',
              truncateTickAt: 0
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle',
              truncateTickAt: 0
            }}
            lineWidth={4}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor', modifiers: []}}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            areaOpacity={0}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />
        </div>
      </CardContent>
    </Card>
  )
}
