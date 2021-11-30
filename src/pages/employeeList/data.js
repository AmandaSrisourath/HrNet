const data = [
    {
        id: '1',
        firstName: 'Bob',
        lastName: 'Ly',
        startDate: '21/07/2020',
        department: 'Sales',
        dateOfBirth: '21/07/1968',
        street: 'Main street',
        city: 'Dothan',
        state: 'AL',
        zipCode: 35005
    },
    {
        id: '2',
        firstName: 'Patrick',
        lastName: 'Smith',
        startDate: '21/07/2011',
        department: 'Engineering',
        dateOfBirth: '01/01/1976',
        street: 'Forest street',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: 90011
    },
    {
        id: '3',
        firstName: 'Lisa',
        lastName: 'Stark',
        startDate: '21/07/2000',
        department: 'Legal',
        dateOfBirth: '19/12/1973',
        street: 'Summer street',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 32004
    },
    {
        id: '4',
        firstName: 'Jean',
        lastName: 'Dupont',
        startDate: '21/07/2005',
        department: 'Marketing',
        dateOfBirth: '07/09/1982',
        street: 'Madison avenue',
        city: 'Indianapolis',
        state: 'IN',
        zipCode: 47906
    },
    {
        id: '5',
        firstName: 'Pierre',
        lastName: 'Dallas',
        startDate: '21/07/2012',
        department: 'Human Resources',
        dateOfBirth: '11/02/1967',
        street: 'Red street',
        city: 'Cambridge',
        state: 'MA',
        zipCode: 2139
    },
    {
        id: '6',
        firstName: 'Luc',
        lastName: 'Diaz',
        startDate: '21/07/2018',
        department: 'Sales',
        dateOfBirth: '28/10/1991',
        street: 'Robert street',
        city: 'Foley',
        state: 'AL',
        zipCode: 36695
    },
    {
        id: '7',
        firstName: 'Pascal',
        lastName: 'Bush',
        startDate: '21/07/2007',
        department: 'Engineering',
        dateOfBirth: '17/05/1966',
        street: 'Apache street',
        city: 'San Diego',
        state: 'CA',
        zipCode: 90011
    },
    {
        id: '8',
        firstName: 'Brigitte',
        lastName: 'Amazon',
        startDate: '21/07/2019',
        department: 'Legal',
        dateOfBirth: '10/11/1985',
        street: 'Trinity street',
        city: 'Miami',
        state: 'FL',
        zipCode: 32007
    },
    {
        id: '9',
        firstName: 'George',
        lastName: 'Tiger',
        startDate: '21/07/2004',
        department: 'Marketing',
        dateOfBirth: '04/01/1990',
        street: 'Tower street',
        city: 'Evansville',
        state: 'IN',
        zipCode: 46307
    },
    {
        id: '10',
        firstName: 'Jeanne',
        lastName: 'Wood',
        startDate: '21/07/2020',
        department: 'Human Resources',
        dateOfBirth: '13/08/1978',
        street: 'Ridge street',
        city: 'Boston',
        state: 'MA',
        zipCode: 2127
    },
    {
        id: '11',
        firstName: 'Bob',
        lastName: 'Ly',
        startDate: '21/07/2020',
        department: 'Sales',
        dateOfBirth: '21/07/1968',
        street: 'Main street',
        city: 'Dothan',
        state: 'AL',
        zipCode: 35005
    },
    {
        id: '12',
        firstName: 'Patrick',
        lastName: 'Smith',
        startDate: '21/07/2011',
        department: 'Engineering',
        dateOfBirth: '01/01/1976',
        street: 'Forest street',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: 90011
    },
    {
        id: '13',
        firstName: 'Lisa',
        lastName: 'Stark',
        startDate: '21/07/2000',
        department: 'Legal',
        dateOfBirth: '19/12/1973',
        street: 'Summer street',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 32004
    },
    {
        id: '14',
        firstName: 'Jean',
        lastName: 'Dupont',
        startDate: '21/07/2005',
        department: 'Marketing',
        dateOfBirth: '07/09/1982',
        street: 'Madison avenue',
        city: 'Indianapolis',
        state: 'IN',
        zipCode: 47906
    },
    {
        id: '15',
        firstName: 'Pierre',
        lastName: 'Dallas',
        startDate: '21/07/2012',
        department: 'Human Resources',
        dateOfBirth: '11/02/1967',
        street: 'Red street',
        city: 'Cambridge',
        state: 'MA',
        zipCode: 2139
    },
    {
        id: '16',
        firstName: 'Luc',
        lastName: 'Diaz',
        startDate: '21/07/2018',
        department: 'Sales',
        dateOfBirth: '28/10/1991',
        street: 'Robert street',
        city: 'Foley',
        state: 'AL',
        zipCode: 36695
    },
    {
        id: '17',
        firstName: 'Pascal',
        lastName: 'Bush',
        startDate: '21/07/2007',
        department: 'Engineering',
        dateOfBirth: '17/05/1966',
        street: 'Apache street',
        city: 'San Diego',
        state: 'CA',
        zipCode: 90011
    },
    {
        id: '18',
        firstName: 'Brigitte',
        lastName: 'Amazon',
        startDate: '21/07/2019',
        department: 'Legal',
        dateOfBirth: '10/11/1985',
        street: 'Trinity street',
        city: 'Miami',
        state: 'FL',
        zipCode: 32007
    },
    {
        id: '19',
        firstName: 'George',
        lastName: 'Tiger',
        startDate: '21/07/2004',
        department: 'Marketing',
        dateOfBirth: '04/01/1990',
        street: 'Tower street',
        city: 'Evansville',
        state: 'IN',
        zipCode: 46307
    },
    {
        id: '20',
        firstName: 'Jeanne',
        lastName: 'Wood',
        startDate: '21/07/2020',
        department: 'Human Resources',
        dateOfBirth: '13/08/1978',
        street: 'Ridge street',
        city: 'Boston',
        state: 'MA',
        zipCode: 2127
    },
    {
        id: '21',
        firstName: 'Bob',
        lastName: 'Ly',
        startDate: '21/07/2020',
        department: 'Sales',
        dateOfBirth: '21/07/1968',
        street: 'Main street',
        city: 'Dothan',
        state: 'AL',
        zipCode: 35005
    },
    {
        id: '22',
        firstName: 'Patrick',
        lastName: 'Smith',
        startDate: '21/07/2011',
        department: 'Engineering',
        dateOfBirth: '01/01/1976',
        street: 'Forest street',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: 90011
    },
    {
        id: '23',
        firstName: 'Lisa',
        lastName: 'Stark',
        startDate: '21/07/2000',
        department: 'Legal',
        dateOfBirth: '19/12/1973',
        street: 'Summer street',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 32004
    },
    {
        id: '24',
        firstName: 'Jean',
        lastName: 'Dupont',
        startDate: '21/07/2005',
        department: 'Marketing',
        dateOfBirth: '07/09/1982',
        street: 'Madison avenue',
        city: 'Indianapolis',
        state: 'IN',
        zipCode: 47906
    },
    {
        id: '25',
        firstName: 'Pierre',
        lastName: 'Dallas',
        startDate: '21/07/2012',
        department: 'Human Resources',
        dateOfBirth: '11/02/1967',
        street: 'Red street',
        city: 'Cambridge',
        state: 'MA',
        zipCode: 2139
    },
    {
        id: '26',
        firstName: 'Luc',
        lastName: 'Diaz',
        startDate: '21/07/2018',
        department: 'Sales',
        dateOfBirth: '28/10/1991',
        street: 'Robert street',
        city: 'Foley',
        state: 'AL',
        zipCode: 36695
    },
    {
        id: '27',
        firstName: 'Pascal',
        lastName: 'Bush',
        startDate: '21/07/2007',
        department: 'Engineering',
        dateOfBirth: '17/05/1966',
        street: 'Apache street',
        city: 'San Diego',
        state: 'CA',
        zipCode: 90011
    },
    {
        id: '28',
        firstName: 'Brigitte',
        lastName: 'Amazon',
        startDate: '21/07/2019',
        department: 'Legal',
        dateOfBirth: '10/11/1985',
        street: 'Trinity street',
        city: 'Miami',
        state: 'FL',
        zipCode: 32007
    },
    {
        id: '29',
        firstName: 'George',
        lastName: 'Tiger',
        startDate: '21/07/2004',
        department: 'Marketing',
        dateOfBirth: '04/01/1990',
        street: 'Tower street',
        city: 'Evansville',
        state: 'IN',
        zipCode: 46307
    },
    {
        id: '30',
        firstName: 'Jeanne',
        lastName: 'Wood',
        startDate: '21/07/2020',
        department: 'Human Resources',
        dateOfBirth: '13/08/1978',
        street: 'Ridge street',
        city: 'Boston',
        state: 'MA',
        zipCode: 2127
    },
];

const columns = [
    { field: 'firstName', headerName: 'First Name', width: 142 },
    { field: 'lastName', headerName: 'Last Name', width: 142 },
    { field: 'startDate', headerName: 'Start Date', width: 142 },
    { field: 'department', headerName: 'Department', width: 142 },
    { field: 'dateOfBirth', headerName: 'Date Of Birth', width: 142 },
    { field: 'street', headerName: 'Street', width: 142 },
    { field: 'city', headerName: 'City', width: 142 },
    { field: 'state', headerName: 'State', width: 142 },
    { field: 'zipCode', headerName: 'Zip Code', width: 142 },
]

export { data, columns };