import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    //Иметируем динамическую передачу имени и зарплаты
    const data = [
        {name:'John C.', salary: 800, increase: false, id: 1, onReadyIncrease: false},
        {name:'Alex M.', salary: 3000, increase: true, id: 2, onReadyIncrease: false},
        {name:'Carl W.', salary: 5000, increase: false, id: 3, onReadyIncrease: false}
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data = {data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;