import React, { Component } from "react"
import { Cards, Chart, CountryPicker } from "./components"
import { fetchData } from "./api"
import coronaImage from './assets/logo.png'
import styles from './App.module.css'

class App extends Component {
   state = {
      data: {},
      country: "",
   }

   async componentDidMount() {
      const fetchedData = await fetchData()

      this.setState({ data: fetchedData })
   }

   handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country)

      this.setState({data: fetchedData, country: country})
   }

   render() {

      const { data, country } = this.state

      return (
         <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <h1 className="text-3xl tracking-wider">TRACKER</h1>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
            <footer className="p-4 text-gray-500">
               &copy; 2020 SuperVision Design
            </footer>
         </div>
      )
   }
}

export default App
