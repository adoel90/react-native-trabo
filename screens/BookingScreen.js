import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  AsyncStorage,
  Picker,
  FlatList,
  Alert
} from 'react-native';

import { ListItem } from 'react-native-material-ui';
import CalendarPicker from 'react-native-calendar-picker';


import { LinearGradient } from 'expo';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import styled, {ThemeProvider} from 'styled-components/native'


import Modal from "react-native-modal";
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';

import Dates from '../components/Date';
import moment from 'moment';
import { Icon } from 'expo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListUser } from '../actions/user';
import { getBookingCalendarAvailable } from '../actions/booking_calender_available'

export const iconPreviousLeft = () => (
  <Icon.Ionicons
    name="md-arrow-dropleft"
    size={26}
    style={{marginLeft: 24}}
  />
);

class BookingScreen extends React.Component {

  static navigationOptions = {
    title: 'Booking'
  };

  constructor(props){
    
    super(props)
    
    this.state = {

      date: null,
      focus: 'startDate',
      startDate: null,
      endDate: null,
      productList:{},
      selectedValueDropdownlist: {},
      isSelectedValueDrProduct: false,
      isClickDropdown: false,
      isModalVisible: false,
      checked: false,
      dateListAvailable: {},
      selectedStartDate: null,
      
    };

    this.onDateChange = this.onDateChange.bind(this);
    this._handleChangeOption = this._handleChangeOption.bind(this);
  }


  componentDidMount(){
    const { action } = this.props;
  
  }

  componentDidUpdate(prevProps){

    const { login, product, availableCalendar } = this.props;

    if(prevProps.login != login){

    }

    if(prevProps.product != product){

      this.setState({
        ...this.state,
        dateListAvailable: availableCalendar.response
      })
    }

    if(prevProps.availableCalendar != availableCalendar){
      this.setState({
        ...this.state,
        dateListAvailable: availableCalendar.response
      }, () => {
        console.log("Date Available List : ",this.state.dateListAvailable)
      })
    }
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    }, () => {
      const { selectedStartDate } = this.state;
      // this.props.navigation.navigate('Authentication');
      this.props.navigation.navigate('InsideBooking', {data: selectedStartDate })
    });
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Authentication');
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  //*Picker or Dropdownlist utilities
  _handleChangeOption = (value) => {
  
    this.setState({
      ...this.state,
      selectedValueDropdownlist: value,
      isSelectedValueDrProduct: true
    
    }, () => {

      const { action } = this.props;
      console.log(this.state.selectedValueDropdownlist);
      // action.getBookingCalendarAvailable(selectedValueDropdownlist)
      // action.getBookingCalendarAvailable()
    })
  }

  render() {

    const { action, availableCalendar, product} = this.props;
    const { selectedValueDropdownlist, isClickDropdown, dateListAvailable, selectedStartDate, isSelectedValueDrProduct} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    //*Native Date Utilities
    const isDateBlocked = (date) => {
      date = moment('2019-02-20').isBefore(moment('2019-02-28'), 'day');
      
    }

    // const onDateChange = ({ date }) => {
    //   this.setState({ ...this.state, date });
    // };
    
    const start = moment('2017-07-1', 'YYYY-MM-DD');
    const end   = moment('2017-07-28', 'YYYY-MM-DD');
    const range = moment.range(start, end);
  

    //*Modal & List Utilities
    const loading = [{name: 'Loading...', code: 'item1'}]
    
    return (
      <View style={styles.container}>   
     
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <OpenSansText></OpenSansText>

            <TouchableOpacity onPress={this._toggleModal}>
              <OpenSansTextSelectProduct>{isSelectedValueDrProduct == true ? selectedValueDropdownlist.name : "Select Product for availability"}</OpenSansTextSelectProduct>
            </TouchableOpacity>

            {/* Modal React Native Modal  */}
            <Modal 
              animationIn="slideInUp"
              isVisible={this.state.isModalVisible} 
              style={styles.modalContent}>
              
              <View style={{ flex: 1 }}>
                <FlatList
                  data={product.length != null ? product : loading }
                
                  
                  renderItem={({item, separators}) => (
                    <TouchableOpacity
                      onPress={this._handleChangeOption(item)}
                      onShowUnderlay={separators.highlight}
                      onHideUnderlay={separators.unhighlight}>
    
                      <View style={{backgroundColor: 'white'}} >
                        <OpenSansTextPicker key={item.code}>{item.name}</OpenSansTextPicker>
                      </View>
                    </TouchableOpacity>
                  )}
                />
      
                <TouchableOpacity onPress={this._toggleModal}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </Modal>
        

          {/* 
            <Picker
                selectedValue={selectedValueDropdownlist }
                style={styles.dropdownlist}
                // itemStyle={{fontFamily:'open-sans-medium'}} Only working on iOS
                onValueChange={_handleChangeOption}
                textStyle={{fontFamily:'openSansMedium'}}
              >
              
                {
                  product.length != null ? product.map((data, i) => {
                    return(
                      <Picker.Item                 
                        key={i} 
                        label={data.name} 
                        value={data.code} />
                      )
                    }) : null 
                    // "Custom Font Picker using Android" ==> https://stackoverflow.com/questions/38921492/how-to-style-the-standard-react-native-android-picker/39141949#39141949
                    // }) : renderDefaultValueDropdownlist()
                  }
              </Picker>
          */}

          
          <BorderBottomView></BorderBottomView>
            {/*  
            <Dates
              onDatesChange={onDatesChange}
              isDateBlocked={isDateBlocked}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focus}
              range
            />

              <View>
              <Text>SELECTED DATE:{ startDate }</Text>
            </View>
          */}

          <CalendarPicker
            onDateChange={this.onDateChange}
            selectedStartDate={new Date(2019, 6, 3)}
            selectedEndDate={end}
            selectedDayColor="grey"
            minDate={isSelectedValueDrProduct == true  ? new Date (2019,1, 15) : null}
            maxDate={isSelectedValueDrProduct == true  ? new Date(2019, 1, 28) : null }
            selectedDayStyle={{backgroundColor:'orange'}}
            // allowRangeSelection={true}
            textStyle={{fontFamily:'openSansMedium'}}
            previousTitle="<"
            nextTitle=">"
          />

          <RecentOrderSeeMoreView>  
            <Row size={12}>
              <Col sm={6} md={4} lg={3}>
                <OpenSansTextRecentOrder>Recent Order</OpenSansTextRecentOrder>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <OpenSansTextSeeMore>SEE MORE</OpenSansTextSeeMore>
              </Col>
            </Row>   
          </RecentOrderSeeMoreView> 

          <RecentOrderListView>
            <Row size={12}>
              <Col sm={3}><OpenSansTypography value="Paid" fontSize="12px" /></Col>
              <Col sm={7}><OpenSansTypography value="Yoga Class in Singaraja" fontSize="13px" /></Col>
              <Col sm={2}><OpenSansTypography value="20 Aug" fontSize="13px" /></Col>
            </Row>
            <Row size={12}>
              <Col sm={10}><OpenSansTypography value="Winsen Tandra" fontSize="12px" /></Col>
              <Col sm={2}><OpenSansTypography value="Just now" fontSize="12px" /></Col>
            </Row>
            <Row>
              <Col sm={7}><OpenSansTypography value="3 Pax" fontSize="12px" /></Col>
              <Col sm={5}><OpenSansTypography value="56713178-02-01-2019" fontSize="12px" /></Col>
            </Row>
          </RecentOrderListView>
        </ScrollView>
        {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>}
        <Text style={[styles.date, this.state.focus === 'startDate' && styles.focused]}>{this.state.startDate && this.state.startDate.format('LL')}</Text>
        <Text style={[styles.date, this.state.focus === 'endDate' && styles.focused]}>{this.state.endDate && this.state.endDate.format('LL')}</Text>
      </View>
    );
  }
}



export const OpenSansTypography = ({value, fontSize, color, textAlign}) => (

  <TextElement
    fontSize={fontSize}
    color={color} 
    // textAlign={textAlign}
    // fontWeight={fontWeight}
    // 'font-weight': true,
    //color=`#1ea0b1`
    //color=#ababab
  >
    {value}
  </TextElement>
)

export const theme= {
  main: "#1ea0b1"
}

const TextElement = styled.Text`
  font-family: 'openSansMedium';
  font-size: ${props => props.fontSize};
 
  
`
// color: ${props => props.theme.main}; 
//color: ${props => props.paid ? props.theme.paid : props.theme.pending }
//color: ${props => props.paid == "paid" ? props.theme.paid : null }
// text-align: ${props => props.textAlign}

// color: ${props => props.color }
// font-weight: ${props => props.fontWeight}


// TextElement.defaultProps = {
//   theme: {
//     paid: "#1ea0b1",
//     pending: "#ababab"
//   }
// }



const RecentOrderListView = styled.View`
  background: transparent;
  padding: 22px;
`
const RecentOrderSeeMoreView = styled.View`
  background: #e6eaed;
  padding: 20px;
`
const OpenSansTextRecentOrder = styled.Text`
    font-family: 'openSansMedium';
    font-size: 12px;
    color: #676667;
`
const OpenSansTextSeeMore = styled.Text`
    font-family: 'openSansMedium';
    font-size: 12px;
    color: orange;
    text-align: right;
`
const OpenSansTextPicker = styled.Text`
    font-family: 'openSansMedium';
    font-size: 17px;
`
const OpenSansTextSelectProduct = styled.Text`
  font-family: 'openSansMedium';
  font-size: 17px;
  margin: 10px;
  text-align: center;
  color: #989898;
`

const OpenSansText = styled.Text`
    font-family: 'openSansMedium';
    font-size: 14px;
`

//*Border
const BorderBottomView = styled.View`
  border-width: 1;
  border-radius: 2;
  border-color: #f1eded;
  border-bottom-width: 0;
  shadow-color: red;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.5;
  elevation: 0.5;
  margin-bottom: 20;
`


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 0,
  },
  date: {
    marginTop: 0
  },
  focused: {
    color: 'blue'
  },
  dropdownlist: {
    flex: 1,
    flexGrow: 1,
    // width: 200, 
    height: 40
    // shadowColor: '#000', ==> NOT WORK IN PICKER
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    margin: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

const mapStateToProps = (state) => ({
  login: state.login.data,
  availableCalendar: state.bookingCalendar.data,
  product: state.product.data
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({getListUser, getBookingCalendarAvailable}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);


   {/*
      https://docs.expo.io/versions/latest/sdk/linear-gradient/ 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      

        <LinearGradient
          colors={['#7D6FE3', '#3121A9']}
          start={[1,1]}//Top & Left; 10% & 10%
          //end={[1,1]}//Bottom & Right; 10% & 10%
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
      */}