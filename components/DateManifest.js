import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

import moment from 'moment';
import 'moment-range';
import { Icon } from 'expo';

import styled from 'styled-components/native'
import {Column as Col, Row} from 'react-native-flexbox-grid';


type DatesType = {
    range: boolean,
    date: ?moment,
    startDate: ?moment,
    endDate: ?moment,
    focusedInput: 'startDate' | 'endDate',
    onDatesChange: (date: { date?: ?moment, startDate?: ?moment, endDate?: ?moment }) => void,
    isDateBlocked: (date: moment) => boolean,
    onDisableClicked: (date: moment) => void
  };

type MonthType = {
    range: boolean,
    date: ?moment,
    startDate: ?moment,
    endDate: ?moment,
    focusedInput: 'startDate' | 'endDate',
    currentDate: moment,
    focusedMonth: moment,
    onDatesChange: (date: { date?: ?moment, startDate?: ?moment, endDate?: ?moment }) => void,
    isDateBlocked: (date: moment) => boolean,
    onDisableClicked: (date: moment) => void
}
  

export const Month = (props: MonthType) => {

    const {
      range,
      date,
      startDate,
      endDate,
      focusedInput,
      currentDate,
      focusedMonth,
      onDatesChange,
      isDateBlocked,
      onDisableClicked
    } = props;

    console.log(focusedMonth)
    console.log(currentDate.clone().startOf('isoweek'));
    
  
    const dayNames = [];
    const weeks = [];
    const startOfMonth = focusedMonth.clone().startOf('month').startOf('isoweek');// set to the first day of this week according to ISO 8601, 12:00 am
    const endOfMonth = focusedMonth.clone().endOf('month');
    const weekRange = moment.range(currentDate.clone().startOf('isoweek'), currentDate.clone().endOf('isoweek'));
  
    weekRange.by('days', (day: moment) => {
      dayNames.push(
  
        <OpenSansTextDay key={day.date()} style={styles.dayName}>
          {day.format('ddd')}
        </OpenSansTextDay>
        // <Text key={day.date()} style={styles.dayName}>
        //   {day.format('ddd')}
        // </Text>
      );
    });
  
    moment.range(startOfMonth, endOfMonth).by('weeks', (week: moment) => {
      weeks.push(
        <Week
          key={week}
          range={range}
          date={date}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          currentDate={currentDate}
          focusedMonth={focusedMonth}
          startOfWeek={week}
          onDatesChange={onDatesChange}
          isDateBlocked={isDateBlocked}
          onDisableClicked={onDisableClicked}
        />
      );
    });
  
    return (
      <View style={styles.month}>
        <View style={styles.week}>
          {dayNames}
        </View>
        {weeks}
      </View>
    );
  };

const OpenSansTextMonthYear = styled.Text`
  font-family: 'openSansMedium';
  font-size: 17px;
`
  

export default class DatesManifest extends Component {
    state = {
      currentDate: moment(),
      focusedMonth: moment().startOf('month')
    }

    

    props: DatesType;
  
    render() {
      const previousMonth = () => {
        // this.setState({ focusedMonth: this.state.focusedMonth.add(-1, 'M') });
        console.log("Previous...")
      };
  
      // console.log("Brrrr");
  
      const nextMonth = () => {
        // this.setState({ focusedMonth: this.state.focusedMonth.add(1, 'M') });
        console.log("Next...");
      };
  
      return (

        <View style={styles.calendar}>
          <View style={styles.heading}>
            <TouchableOpacity onPress={previousMonth}>
              {/* <Text>{'<'}</Text> */}
              <Icon.Ionicons
                name="md-arrow-dropleft"
                size={26}
                style={{marginLeft: 24, marginBottom: 10}}
              />
            </TouchableOpacity>
            {/** <Text>{this.state.focusedMonth.format('MMMM')} 2019</Text>*/}
            <OpenSansTextMonthYear>{this.state.focusedMonth.format('MMMM')} 2019</OpenSansTextMonthYear>
            
            <TouchableOpacity onPress={nextMonth}>
              {/*<Text>{' >'}</Text>*/}
              <Icon.Ionicons
                name="md-arrow-dropright"
                // name={
                //     Platform.OS === 'ios'
                //     ? `ios-undo`
                //     : 'md-undo'
                // }
                size={26}
                style={{marginRight: 24, marginBottom: 10}}
              />
              
             
            </TouchableOpacity>
          </View>
          {/* 
            <Month
                range={this.props.range}
                date={this.props.date}
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                focusedInput={this.props.focusedInput}
                currentDate={this.state.currentDate}
                focusedMonth={this.state.focusedMonth}
                onDatesChange={this.props.onDatesChange}
                isDateBlocked={this.props.isDateBlocked}
                onDisableClicked={this.props.onDisableClicked}
            />
          */}
        </View>
      );
    }
  }