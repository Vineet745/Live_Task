import { BarChart } from "react-native-gifted-charts";
import {View} from "react-native"
import { verticalScale } from "../constants/dimension";
        
export const CustomBarChart = () => {
    const barData = [
        {value: 250, label: 'Mon'},
        {value: 500, label: 'Tue'},
        {value: 745, label: 'Wed'},
        {value: 320, label: 'Thu'},
        {value: 600, label: 'Fri'},
        {value: 256, label: 'Sat'},
        {value: 300, label: 'Sun'},
    ];
    return (
        <View style={{borderWidth:1,height:"100%"}}>
            <BarChart
                barWidth={22}
                backgroundColor="#f3f3f3"
                noOfSections={3}
                barBorderRadius={4}
                frontColor="#04c38c"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    );
};