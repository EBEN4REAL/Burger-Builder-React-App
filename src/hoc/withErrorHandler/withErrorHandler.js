import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxi';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
         state = {
             error: null,
             modalClosed: false
         }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                console.log(req);
                return req;
            })
            this.resInterceptors = axios.interceptors.response.use(res => {
                console.log(res);
                return res;
            }, error => {
               this.setState({error: error});
            })
        }
        componentWillUnmount(){
            console.log("will unmount", this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        errorCancelHandler = () => {
            this.setState({modalClosed: true});
        }
        render() {
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler} >
                        {this.state.error? "Network Error" : null}
                    </Modal>
                    <WrappedComponent {...this.props} /> 
                </Aux>
            )
        }
    }
    
}

export default withErrorHandler;