import React, {Component} from 'react';
import Aux from '../../hoc/Auxi'
import classes from  './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    openSideDrawerHandler = () => {
        this.setState((previousState) => {
            return {
                showSideDrawer: !previousState.showSideDrawer
            }
        })
    }
    render (){
        return (
             <Aux>
                <ToolBar openSideBar={this.openSideDrawerHandler} />
                <SideDrawer 
                    closed={this.SideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;