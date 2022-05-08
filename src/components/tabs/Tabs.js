import React, {useState} from 'react';
import './Tabs.scss';
import Tab1 from "./Tab-1";
import Tab2 from "./Tab-2";
import Tab3 from "./Tab-3";

function Tabs(){
    //Declaration...
    const tabs = document.getElementsByClassName('tabTitle');
    const [activeTab, setActiveTab] = useState('tab-1');
    //Methods...
    const handleActiveTab = (id)=>{
        let element = document.getElementById(id);
        for (let i = 0;i<tabs.length;i++){
            tabs[i].classList.remove('activeTab');
        }
        element.classList.add('activeTab');
        setActiveTab(id);
    }
    //return view.
    return (
        <>
            <div className='tabsContainer'>
                <div
                    id='tab-1'
                    className='tabTitle activeTab'
                    onClick={()=>handleActiveTab('tab-1')}
                >
                    <i className='fas fa-door-open'></i>
                    <p>Cancel at any time</p>
                </div>
                <div
                    id='tab-2'
                    className='tabTitle'
                    onClick={()=>handleActiveTab('tab-2')}
                >
                    <i className='fas fa-tablet-alt'></i>
                    <p>Watch anywhere</p>
                </div>
                <div
                    id='tab-3'
                    className='tabTitle'
                    onClick={()=>handleActiveTab('tab-3')}
                >
                    <i className='fas fa-tags'></i>
                    <p>Pick Your Plan</p>
                </div>
            </div>
            <div className='tabsContent'>
                {
                    activeTab === 'tab-1' && <Tab1/>
                }
                {
                    activeTab === 'tab-2' && <Tab2/>
                }
                {
                    activeTab === 'tab-3' && <Tab3/>
                }
            </div>
        </>
    );
}

export default Tabs;