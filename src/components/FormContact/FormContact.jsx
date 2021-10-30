// import { Component } from 'react';
import { useState } from 'react';
import s from './FormContact.module.css';

export default function FormContact({onSubmit}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handelChange(e) {
    const {name, value} = e.currentTarget;

    switch(name){
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default: return;
    }
  }

  function handelSubmit (e){
    e.preventDefault();

    const contact = {name, number};
    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');

  };

  return (
          <form onSubmit={handelSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handelChange}
                className={s.input}
              />
            </label>
            <label className={s.label}>
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={handelChange}
                className={s.input}
              />
            </label>
            <button type="submit" className={s.btn}>
              Add Contact
            </button>
          </form>
        );
}

// class FormContact extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handelChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handelSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handelSubmit} className={s.form}>
//         <label className={s.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             onChange={this.handelChange}
//             className={s.input}
//           />
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             onChange={this.handelChange}
//             className={s.input}
//           />
//         </label>
//         <button type="submit" className={s.btn}>
//           Add Contact
//         </button>
//       </form>
//     );
//   }
// }

// export default FormContact;
