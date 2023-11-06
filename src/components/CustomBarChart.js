// import {BarChart} from 'react-native-gifted-charts';
// import {View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// export const CustomBarChart = ({weekChart}) => {

// // 
// // const day = [
// //   {index:0,label:"Mon"},
// //   {index:1,label:"Tue"},
// //   {index:2,label:"Wed"},
// //   {index:3,label:"Thu"},
// //   {index:4,label:"Fri"},
// //   {index:5,label:"Sat"},
// //   {index:6,label:"Sun"},
// // ]





//   // Custom Array
//   useEffect(() => {
//     if (weekChart && weekChart.length > 0) {
//       const customData = weekChart.map(dataItem => {

//         console.log("data",dataItem)
//         // const mainData = dataItem?.updated_at;
//         // if (mainData) {
//         //   const CustomizeData = mainData.split('T');
//         //   const inputDate = CustomizeData[0];
//         //   console.log("input",inputDate)
  
          
//         // }
//         // return null; // Ensure to return something from the map function
//       });
//     }
//   }, [weekChart]);
  

//   // Customize Chart
//   const customizeChartData = weekChart?.map((dataItem, index) => {
//     console.log("index", index); 
//     return {
//       value: dataItem.credits,
//     };
//   });




//   return (
//     <View
//       style={{
//         height: '90%',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <BarChart
//         dashWidth={0}
//         height={330}
//         initialSpacing={30}
//         spacing={20}
//         width={300}
//         barWidth={20}
//         backgroundColor="#f3f3f3"
//         noOfSections={10}
//         barBorderRadius={3}
//         frontColor="#04c38c"
//         data={customizeChartData}
//         yAxisThickness={1}
//         xAxisThickness={1}
//       />
//     </View>
//   );
// };



import {BarChart} from 'react-native-gifted-charts';
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

export const CustomBarChart = ({weekChart}) => {
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    if (weekChart && weekChart.length > 0) {
      const formattedData = weekChart.reduce((acc, item) => {
        const date = new Date(item.updated_at);
        console.log("date",date)
        const weekNumber = getWeekNumber(date);
        if (!acc[weekNumber]) {
          acc[weekNumber] = [];
        }
        acc[weekNumber].push(item);
        return acc;
      }, {});
      setGroupedData(formattedData);
    }
  }, [weekChart]);


  const getWeekNumber = (date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    return Math.ceil(((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7);
  };

  const renderBarChart = () => {
    const customizeChartData = Object.values(groupedData).map((weekData, index) => {
      const totalCredits = weekData.reduce((acc, dataItem) => acc + dataItem.credits, 0);
      return { value: totalCredits };
    });


    return (
      <BarChart
        dashWidth={0}
        height={330}
        initialSpacing={30}
        spacing={20}
        width={300}
        barWidth={20}
        backgroundColor="#f3f3f3"
        noOfSections={10}
        barBorderRadius={3}
        frontColor="#04c38c"
        data={customizeChartData}
        yAxisThickness={1}
        xAxisThickness={1}
      />
    );
  };

  return (
    <View style={{ height: '90%', alignItems: 'center', justifyContent: 'center' }}>
      {renderBarChart()}
    </View>
  );
};
