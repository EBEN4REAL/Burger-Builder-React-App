import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    render (){
        return (
             <Aux>
                <ToolBar />
                <SideDrawer 
                    closed={this.SideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;