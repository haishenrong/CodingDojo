import React, {useState} from 'react'

const Tab = props => {
    const allTabs = {
        'Amy': "Enjoys Aurora Borealis.",
        'Beth': "Is not afraid of the dark.",
        'Conrad': "Knows how to jump.",
        'Daniel': "Is a dandan."
    }
    const [tabs, setTabs] = useState(allTabs);
    const [active, setActive] = useState("");

    return(
        <div>
            <div style={{display:'flex', gap: '10px', flexWrap: 'wrap'}}>
                { Object.keys(tabs).map(key => 
                    <div style={{backgroundColor:'cornflowerblue'}}
                    onClick = {(e) => setActive(e.target.id)} id={tabs[key]}>{key}</div>)
                }
            </div>
            <div style={{backgroundColor:'maroon'}}>
                {active}
            </div>
        </div>
    )
}
export default Tab;