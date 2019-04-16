import React, {Component} from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
      case 'SEARCH_TRACKS':
        return {
          ...state,
          track_list: action.payload,
          heading: 'Search Results'
        };
      default:
        return state;
    }
  }

  export class Provider extends Component {
    state = {
      example: 'Top 10 Tracks',
      dispatch: action => this.setState(state => reducer(state, action))
    };
  
    componentDidMount() {
    }

    render() {
        return (
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer