import * as React from 'react';

const Contact = () => {
  const [value, setValue] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [err, setErr] = React.useState({});
  const form = React.useRef();
  const [attr, setAttr] = React.useState(null);

  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const temp = { nameErr: '', msgErr: '', emailErr: '' };
    value.name !== ''
      ? (temp.nameErr = '')
      : (temp.nameErr = 'Please enter your given name');
    value.message !== ''
      ? (temp.msgErr = '')
      : (temp.msgErr = 'Enter your message here please');
    regExp.test(value.email)
      ? (temp.emailErr = '')
      : (temp.emailErr = 'Please enter a valid email address');

    setErr(temp);

    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate()
      ? setAttr('https://formspree.io/f/xbjwvdvq')
      : console.log(validate(), err);
  };

  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto'>
      <form
        onSubmit={(e) => handleSubmit(e)}
        ref={form}
        method='POST'
        action={attr && attr}
        noValidate
      >
        <div className='form-group mb-6'>
          <input
            type='text'
            className='form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none'
            id='exampleInput7'
            placeholder='Name'
            name='name'
            value={value.name}
            onChange={(e) => handleChange(e)}
          />
          <span className='text-xs text-red-600'>
            {err.nameErr && err.nameErr}
          </span>
        </div>
        <div className='form-group mb-6'>
          <input
            type='email'
            className='form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none'
            id='exampleInput8'
            placeholder='Email address'
            name='email'
            value={value.email}
            onChange={(e) => handleChange(e)}
          />
          <span className='text-xs text-red-600'>
            {err.emailErr && err.emailErr}
          </span>
        </div>
        <div className='form-group mb-6'>
          <textarea
            className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-non '
            id='exampleFormControlTextarea13'
            rows='3'
            placeholder='Message'
            name='message'
            value={value.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <span className='text-xs text-red-600'>
            {err.msgErr && err.msgErr}
          </span>
        </div>
        <div className='form-group form-check text-center mb-6'>
          <input
            type='checkbox'
            className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
            id='exampleCheck87'
            defaultChecked
          />
          <label
            className='form-check-label inline-block text-gray-800'
            htmlFor='exampleCheck87'
          >
            Send me a copy of this message
          </label>
        </div>
        <button
          type='submit'
          className=' w-full px-6 py-2.5  bg-purple-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-purple-700 hover:shadow-lg  focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
