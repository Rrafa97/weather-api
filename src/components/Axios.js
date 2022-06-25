import React, { Component } from 'react';
import axios from 'axios';
import './rloading.scss';
import './sfloading.scss';

/**
 * Streamout  Template String
 * @param {*} template 
 * @param {*} options 
 */
export function compile(template, options) {
    let [evalExpr, expr] = [/<%=(.+?)%>/g, /<%([\s\S]+?)%>/g]
    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');
}

class SelfLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    loading = () => {
        return (
            <div className="container">
                <div>全局图片切割， </div>
  <div className="flex">
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
  </div>
  <div className="flex">
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
  </div>
  <div className="flex">
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
  </div>
  <div className="flex">
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
    <div className="cube">
      <div className="wall front"></div>
      <div className="wall back"></div>
      <div className="wall left"></div>
      <div className="wall right"></div>
      <div className="wall top"></div>
      <div className="wall bottom"></div>
    </div>
  </div>
</div>
        )
    }
    render() { return (<div>{this.loading()}</div>)}
}

class GlobalAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    loading = () => {
        return (
            <div>
                <div> </div>
                    <div className="holder">
                    <div className="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        )
    }

    render() {
        return (<div>
            {this.loading()}
        </div>)
    }
}



class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weathers: '',
            weatherSearchQuery: '',
            covid_19CaseSeachkey: '',
            serchFakeImageSizeKey: '',
            fakeImage: '',
        }
    }

    getData = () => {
        const WEATHER_BASE_URL = 'http://api.weatherstack.com/'
        const WEATHER_ACCESS_KEY = '24b9ceb253f85fa052d9dddf67a5ba24'

        axios.get(`${WEATHER_BASE_URL}/current?access_key=${WEATHER_ACCESS_KEY}&query=${this.state.weatherSearchQuery}`).then(res => {
            console.log(typeof res.data)
            if (res.data.error) {
                
            } else if (res.data.current) {
                this.setState({ weathers: res.data })
                console.log('===>', this.state.weathers)
            }
        })
    }

    serWeatherSearchQuery = (event) => {
        this.setState({ weatherSearchQuery: event.target.value })
    }

    /**
     * @returns set covid19 infomation
     */
    setCovidCaseSearchQuery = (event) => {
        this.setState({ covid_19CaseSeachkey: event.target.value })
    }

    /**
     * Fake image api {params:size} controller
     * @param {Object} event 
     */
    fakeImgSizeController = (event) => {
        this.setState({ serchFakeImageSizeKey: event.target.value })
    }

    showWeatherInfo = () => {
        return (<div>
            <table>
                <tbody>
                    <tr>
                        <td><div>云层:{this.state.weathers.current.cloudcover}</div></td>
                        <td><div>感受度:{this.state.weathers.current.feelslike}</div></td>
                    </tr>
                    <tr>
                        <td> <div>湿度/RH:{this.state.weathers.current.humidity}%</div></td>
                        <td><div>观测时间:{this.state.weathers.current.observation_time}</div></td>
                    </tr>
                    <tr>
                        <td><div>降雨:{this.state.weathers.current.precip}</div></td>
                        <td><div>压强:{this.state.weathers.current.pressure}</div></td>
                    </tr>
                    <tr>
                        <td><div>温度:{this.state.weathers.current.temperature}</div></td>
                        <td><div>紫外线指数:{this.state.weathers.current.uv_index}</div></td>
                    </tr>
                    <tr>
                        <td><div>能见度/V:{this.state.weathers.current.visibility}米</div></td>
                        <td><div>气象码:{this.state.weathers.current.weather_code}</div></td>
                    </tr>
                    <tr>
                        <td><div>气象:{this.state.weathers.current.weather_descriptions}</div></td>
                        {/* <td><div><img src={this.state.weathers.current.weather_icons[0]}/></div></td> */}
                    </tr>
                </tbody>
            </table>



            <div>地点:{this.state.weathers.location.country}.{this.state.weathers.location.region}.{this.state.weathers.location.name}</div>
            <div>时区:{this.state.weathers.location.timezone_id}</div>
            <div>当地时间:{this.state.weathers.location.localtime}</div>
            <span></span>
        </div>
        )
    }

    /**
     * Request base url:https://covid-api.mmediagroup.fr/v1
     * Request type: /cases
     * country  Any country name (case sensitive)
     * ab   Any country ISO abbreviation (example: FR) (takes precedence over "country" parameter)
     * continent
     * Any world continent (example: Europe) (takes precedence over "country" parameter)
     * @param {string} searchKey 
     */
    getCovidCasesData = (searchKey, url = 'https://covid-api.mmediagroup.fr/v1', path = '/cases') => {
        console.log(searchKey)
        if (searchKey) {
            axios.get(url + path + `?country=${searchKey}`).then(res => {
                console.log(res)
            })
        }
    }

    /**
     * Get radom fake image
     * @param {String} imageSize 
     */
    getFakeImage(imageSize = '380') {
        axios.get('https://fakerapi.it/api/v1/images?_width=' + imageSize).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                {/**
             * 天气搜索API
            */}
                <div>
                    <h4>WEATHER API</h4>
                    <hr />
                    <input value={this.state.weatherSearchQuery} onChange={this.getData} placeholder="搜索当前天气信息"></input>
                    <button onClick={this.getData}>搜索</button>
                    {this.state.weathers ? this.showWeatherInfo() : ''}
                </div>

                {/**
             * Pokemon api
            */}
                <div>
                    <h4>Pokemon</h4>
                    <hr></hr>
                    <div><strong>request url:</strong><br></br>
                        <em><a href="https://api.pokemontcg.io/v2/cards?q=name:gardevoir">https://api.pokemontcg.io/v2/cards?q=name:gardevoir</a></em>
                    </div>
                </div>

                {/* Covid-19-API */}
                <div>
                    <h4>Covid-19-API</h4>
                    <hr></hr>
                    <div>
                        <strong>sampleRequest:</strong>  https://github.com/M-Media-Group/Covid-19-API/?ref=devresourc.es
                    </div>
                    <div>
                        <strong>sampleRequest:</strong>
                        <input value={this.state.covid_19CaseSeachkey} onChange={this.setCovidCaseSearchQuery} placeholder="china"></input>
                        <button onClick={() => { this.getCovid19CasesData(this.state.covid_19CaseSeachkey) }}>Search</button>
                        <div></div>
                    </div>
                    <div>

                    </div>
                </div>

                {/* Fake data api for free... */}
                <div>
                    <h4>Fake Data Api</h4>
                    <hr></hr>
                    <div><strong>FakeImage:</strong><em> http://placeimg.com/200/480/any</em></div>
                    <div>
                        <strong>Office doc:</strong><em> <a href="https://fakerapi.it/en/?ref=devresourc.es">https://fakerapi.it/en/?ref=devresourc.es</a> </em> </div>
                    <div>
                        <li> <strong>BaseUrl:</strong> https://fakerapi.it/api/v1/|resource|</li>
                        <li><strong>BaseUsage:</strong>Some resources allow to filter data by GET parameters.
                            The names of these parameters are always preceded by an underscore character "_", for example:
                            <div><em>https://fakerapi.it/api/v1/images?_width=380</em></div>
                        </li>
                        ...
                        <li>
                            <input value={this.state.serchFakeImageSizeKey} onChange={this.fakeImgSizeController} placeholder="Input image size"></input>
                            <button onClick={() => { this.getFakeImage(this.state.serchFakeImageSizeKey) }}>fake</button>
                            <div>
                                <div>image</div>
                            </div>
                        </li>

                    </div>

                </div>

            </div>
        )
    }
}

//  Faker API it's a collection of completely free APIs that helps web developers and web designers generate fake data in a fast and easy way. No registration is required. No tokens, no authentication.
// Every resource allows to choose the API language by the "_locale" parameter and also allows to select the number of rows requested by the "_quantity" parameter. Max 1000 rows.
class FakeImageData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div></div>
        )
    }
}


export { Axios, GlobalAnimation,SelfLoading };