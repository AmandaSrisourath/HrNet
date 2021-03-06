import React, { useState } from "react";
import loadable from '@loadable/component'
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addEmployee } from "../employeeSlice";
import { format } from "date-fns";
import DatePicker from "react-date-picker";
import Dropdown from "basic-react-dropdown";

const ModalCreateEmployee = loadable(() => import("./ModalCreateEmployee"))

function CreateEmployeeForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] =useState('');
    const [department, setDepartment] = useState('');
    const dispatch = useDispatch();

    function openModal(e) {
        e.preventDefault();
        setModalIsOpen(true);
        const date = new Date(dateOfBirth);
        const formattedDate = format(date, "dd/MM/yyyy");
        const dateStarted = new Date(startDate);
        const formattedDateStarted = format(dateStarted, "dd/MM/yyyy");
        const newEmployee = { id: new Date().getTime(), firstName, lastName, dateOfBirth: formattedDate, startDate: formattedDateStarted, street, city, state: state.slice(0, 2).toUpperCase(), zipCode, department };
        dispatch(addEmployee(newEmployee));
        setId(id);
        setFirstName('');
        setLastName('');
        setDateOfBirth('');
        setStartDate('');
        setDepartment('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const onEditFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onEditLastName = (e) => {
        setLastName(e.target.value);
    }

    const onEditDateOfBirth = (value) => {
        setDateOfBirth(value);
    }

    const onEditStartDate = (value) => {
        setStartDate(value);
    }

    const onEditStreet = (e) => {
        setStreet(e.target.value);
    }

    const onEditCity = (e) => {
        setCity(e.target.value);
    }

    const onEditState = (value) => {
        setState(value);
    }

    const onEditZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const onEditDepartment = (value) => {
        setDepartment(value);
    }

    const stateOptions = [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'Alaska', label: 'Alaska' },
        { value: 'American Samoa', label: 'American Samoa' },
        { value: 'Arizona', label: 'Arizona' },
        { value: 'Arkansas', label: 'Arkansas' },
        { value: 'California', label: 'California' },
        { value: 'Colorado', label: 'Colorado' },
        { value: 'Connecticut', label: 'Connecticut' },
        { value: 'Delaware', label: 'Delaware' },
        { value: 'District Of Columbia', label: 'District Of Columbia' },
        { value: 'Federated States Of Micronesia', label: 'Federated States Of Micronesia' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Guam', label: 'Guam' },
        { value: 'Hawaii', label: 'Hawaii' },
        { value: 'Idaho', label: 'Idaho' },
        { value: 'Illinois', label: 'Illinois' },
        { value: 'Iowa', label: 'Iowa' },
        { value: 'Kansas', label: 'Kansas' },
        { value: 'Kentucky', label: 'Kentucky' },
        { value: 'Louisiana', label: 'Louisiana' },
        { value: 'Maine', label: 'Maine' },
        { value: 'Marshall Islands', label: 'Marshall Islands' },
        { value: 'Massachusetts', label: 'Massachusetts' },
        { value: 'Michigan', label: 'Michigan' },
        { value: 'Minnesota', label: 'Minnesota' },
        { value: 'Mississippi', label: 'Mississippi' },
        { value: 'Missouri', label: 'Missouri' },
        { value: 'Montana', label: 'Montana' },
        { value: 'Nebraska', label: 'Nebraska' },
        { value: 'Nevada', label: 'Nevada' },
        { value: 'New Hampshire', label: 'New Hampshire' },
        { value: 'New Jersey', label: 'New Jersey' },
        { value: 'New Mexico', label: 'New Mexico' },
        { value: 'New York', label: 'New York' },
        { value: 'North California', label: 'North California' },
        { value: 'North Dakota', label: 'North Dakota' },
        { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
        { value: 'Ohio', label: 'Ohio' },
        { value: 'Oklahoma', label: 'Oklahoma' },
        { value: 'Oregon', label: 'Oregon' },
        { value: 'Palau', label: 'Palau' },
        { value: 'Pennsylvania', label: 'Pennsylvania' },
        { value: 'Puerto Rico', label: 'Puerto Rico' },
        { value: 'Rhode Island', label: 'Rhode Island' },
        { value: 'South California', label: 'South California' },
        { value: 'South Dakota', label: 'South Dakota' },
        { value: 'Tennessee', label: 'Tennessee' },
        { value: 'Texas', label: 'Texas' },
        { value: 'Utah', label: 'Utah' },
        { value: 'Vermont', label: 'Vermont' },
        { value: 'Virgin Islands', label: 'Virgin Islands' },
        { value: 'Virginia', label: 'Virginia' },
        { value: 'Washington', label: 'Washington' },
        { value: 'West Virginia', label: 'West Virginia' },
        { value: 'Wisconsin', label: 'Wisconsin' },
        { value: 'Wyoming', label: 'Wyoming' },
    ];

    const departmentOptions = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ];

    return (
        <div>
            <Field>
                <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <InputName type="text" id="first-name" onChange={onEditFirstName} value={firstName}/>
                </div>

                <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <InputName type="text" id="last-name" onChange={onEditLastName} value={lastName}/>
                </div>
            </Field>

            <Field>
                <div>
                    <Label htmlFor="date-of-birth">Date of Birth</Label>
                    <DatePicker
                        onChange={onEditDateOfBirth}
                        value={dateOfBirth}
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                    />
                </div>

                <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <DatePicker
                        onChange={onEditStartDate}
                        value={startDate}
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                    />
                </div>
            </Field>

            <Label htmlFor="department">Department</Label>
            <Dropdown options={departmentOptions} onChange={onEditDepartment} value={department}/>

            <Fieldset>
                <legend>Address</legend>

                <div>
                    <Label htmlFor="street">Street</Label>
                    <Input id="street" type="text" onChange={onEditStreet} value={street}/>
                </div>

                <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" type="text" onChange={onEditCity} value={city}/>
                </div>

                <Label htmlFor="state">State</Label>
                <Dropdown options={stateOptions} onChange={onEditState} value={state}/>

                <div>
                    <Label htmlFor="zip-code">Zip Code</Label>
                    <Input id="zip-code" type="number" onChange={onEditZipCode} value={zipCode}/>
                </div>
            </Fieldset>

            <ContainerBtn>
                <SaveBtn className="save-button" onClick={openModal}>Save</SaveBtn>
            </ContainerBtn>
            <ModalCreateEmployee isOpen={modalIsOpen} onRequestClose={closeModal} onClick={closeModal}/>
        </div>
    )
}

const Field = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 8px;
`

const Input = styled.input`
  font-size: 16px;
  background-color: #f1f2fa;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 263px;
  padding: 0 16px;
  outline: none;
`

const InputName = styled.input`
  font-size: 16px;
  background-color: #f1f2fa;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 122.07px;
  padding: 0 16px;
  outline: none;
`

const Fieldset = styled.fieldset`
  margin-top: 16px;
  border: 1px solid black;
  border-radius: 5px;
`

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`

const SaveBtn = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 16px;
  border-radius: 4px;
  border: none;
  background-color: #c5cefb;
  font-weight: bold;
  cursor: pointer;
`

export default CreateEmployeeForm;