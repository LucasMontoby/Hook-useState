import React, {useState} from 'react';



function Formulario (){
    const [inputValue, SetInputValue] = useState('');

    const handleChange = (e) =>{
        SetInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Se ha enviado el mensaje: " + inputValue);
    }

    return(
        <div>
            <h1 style={{ fontSize: '24px', marginBottom: '20px', color:'red' }}>Formulario</h1>
            <form style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
                <label style={{ fontSize: '16px', marginBottom: '5px' }}>Ingresa algún texto:</label>
                <br />
                <input type="text" style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }} value={inputValue} onChange={handleChange} />
                <br /><br />
                <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Enviar</button>
            </form>
        </div>
    );

}

export default Formulario;