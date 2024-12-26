"use client"
import {ResponsiveAreaBump} from '@nivo/bump'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const data = [
  {
    "id": "JavaScript",
    "data": [
      {
        "x": 2000,
        "y": 14
      },
      {
        "x": 2001,
        "y": 17
      },
      {
        "x": 2002,
        "y": 26
      },
      {
        "x": 2003,
        "y": 20
      },
      {
        "x": 2004,
        "y": 24
      },
      {
        "x": 2005,
        "y": 29
      }
    ]
  },
  {
    "id": "ReasonML",
    "data": [
      {
        "x": 2000,
        "y": 17
      },
      {
        "x": 2001,
        "y": 29
      },
      {
        "x": 2002,
        "y": 19
      },
      {
        "x": 2003,
        "y": 10
      },
      {
        "x": 2004,
        "y": 11
      },
      {
        "x": 2005,
        "y": 22
      }
    ]
  },
  {
    "id": "TypeScript",
    "data": [
      {
        "x": 2000,
        "y": 23
      },
      {
        "x": 2001,
        "y": 28
      },
      {
        "x": 2002,
        "y": 26
      },
      {
        "x": 2003,
        "y": 12
      },
      {
        "x": 2004,
        "y": 15
      },
      {
        "x": 2005,
        "y": 13
      }
    ]
  },
  {
    "id": "Elm",
    "data": [
      {
        "x": 2000,
        "y": 10
      },
      {
        "x": 2001,
        "y": 30
      },
      {
        "x": 2002,
        "y": 10
      },
      {
        "x": 2003,
        "y": 12
      },
      {
        "x": 2004,
        "y": 15
      },
      {
        "x": 2005,
        "y": 18
      }
    ]
  },
  {
    "id": "CoffeeScript",
    "data": [
      {
        "x": 2000,
        "y": 26
      },
      {
        "x": 2001,
        "y": 27
      },
      {
        "x": 2002,
        "y": 27
      },
      {
        "x": 2003,
        "y": 12
      },
      {
        "x": 2004,
        "y": 30
      },
      {
        "x": 2005,
        "y": 30
      }
    ]
  }
]

function General() {
  return (
    <Card className="h-full w-full">
      <CardHeader className="h-[100px]">
        <CardTitle>This Week</CardTitle>
        <CardDescription>There are the results of this week.</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[calc(100%-100px)]">
        <ResponsiveAreaBump
          data={data}
          margin={{top: 0, right: 80, bottom: 0, left: 0}}
          spacing={8}
          colors={{scheme: 'nivo'}}
          blendMode="multiply"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'CoffeeScript'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'TypeScript'
              },
              id: 'lines'
            }
          ]}
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
          }}
        />
      </CardContent>
    </Card>
  );
}

export default General;
