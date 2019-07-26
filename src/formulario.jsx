import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            fecha: new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarEmail = this.cambiarEmail.bind(this);
        this.cambiarFecha = this.cambiarFecha.bind(this);
    }

    cambiarNombre(e) {
        this.setState({
            name: e.target.value
        })
    }
    cambiarEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    cambiarFecha() {
        this.setState({
            fecha: new Date()
        });
    }
    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="elemento"className="ed-grid m-grid-2">
                    <div className="form__item">
                        <label>Nombre Completo</label>
                        <input 
                            type="text" 
                            onChange={this.cambiarNombre}
                        />
                    </div>
                    <div className="form__item">
                        <label>Email</label>
                        <input type="email" 
                            onChange = {this.cambiarEmail}
                        />
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
            
        )
    }
    componentDidMount() {
        let elemento = document.getElementById("elemento");
        
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha();
            console.log(new Date());
            

        },1000)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
    }
    componentWillMount() {
        clearInterval(this.intervaloFecha)
    }

}
export default Formulario;