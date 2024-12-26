"use client"
import {ResponsiveCalendar} from '@nivo/calendar'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const data = [
  {"value": 45, "day": "2024-01-03"},
  {"value": 67, "day": "2024-01-10"},
  {"value": 89, "day": "2024-02-15"},
  {"value": 12, "day": "2024-02-17"},
  {"value": 78, "day": "2024-03-05"},
  {"value": 54, "day": "2024-03-08"},
  {"value": 33, "day": "2024-03-12"},
  {"value": 60, "day": "2024-03-21"},
  {"value": 71, "day": "2024-04-01"},
  {"value": 49, "day": "2024-04-18"},
  {"value": 36, "day": "2024-05-03"},
  {"value": 87, "day": "2024-05-05"},
  {"value": 40, "day": "2024-05-19"},
  {"value": 58, "day": "2024-05-27"},
  {"value": 91, "day": "2024-06-10"},
  {"value": 25, "day": "2024-06-20"},
  {"value": 14, "day": "2024-07-01"},
  {"value": 62, "day": "2024-07-15"},
  {"value": 30, "day": "2024-07-22"},
  {"value": 53, "day": "2024-08-05"},
  {"value": 72, "day": "2024-08-15"},
  {"value": 86, "day": "2024-09-08"},
  {"value": 31, "day": "2024-09-12"},
  {"value": 47, "day": "2024-09-30"},
  {"value": 93, "day": "2024-10-04"},
  {"value": 65, "day": "2024-10-20"},
  {"value": 19, "day": "2024-11-01"},
  {"value": 56, "day": "2024-11-15"},
  {"value": 73, "day": "2024-12-05"},
  {"value": 42, "day": "2024-12-18"},
  {"value": 88, "day": "2024-12-25"}
]

function Calendar() {
  return (
    <Card className="h-full w-full">
      <CardHeader className="h-[100px]">
        <CardTitle>Calendar</CardTitle>
        <CardDescription>There are the numbers of this year.</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[calc(100%-100px)]">
        <ResponsiveCalendar
          data={data}
          from="2024-01-01"
          to="2024-12-31"
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{top: 20, right: 0, bottom: 0, left: 20}}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left'
            }
          ]}
        />
      </CardContent>
    </Card>
  )
}

export default Calendar;
