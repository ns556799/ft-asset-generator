import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {Provider} from './context'

const RenderApp = () => {
    return(
        <Provider>  
            <App/>
        </Provider>
    )
}

render(<RenderApp/>, document.querySelector('#root'))