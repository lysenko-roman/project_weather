import React from 'react';

function Form () {
    return (
        <div>
            <form onSubmit={function (weatherMethod) {

            }}>
                <input type='text' name='city' placeholder='Город'/>
                <button>Получить погоду</button>
            </form>
        </div>
    )

}

export default Form;