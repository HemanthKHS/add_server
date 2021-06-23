import React from 'react'
import server from '../server.png'

function Add(){

    return(
        <div>Add Server
            <div className="mainbox">
                <div className="sub1">Servers
                <p>DNS - 3</p>
                <p>DHCP - 4</p>
                <p>WEB - 2</p>
                <p>Linux - 0</p>
                <p>total -9</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                
            
                

                <label for="cars">Add Server :</label>
<select name="Type" id="Type">
  <option value="volvo">DNS</option>
  <option value="saab">WEB</option>
  <option value="mercedes">DHCP</option>
  <option value="mercedes">Linux</option>
</select>
<br />
<button style={{transform:"translateX(-20px) translateY(17px)"}}>Add</button>

                </div>

                <div className="sub2">
                    <div className="serverslist">
                        <div className="serverdiv green">
                            <img className="serverimg" src={server} alt="" />
                            <br />
                            <span style={{fontSize:"13px"}}>DNS</span>
                        </div>
                        <div className="serverdiv red">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span style={{fontSize:"13px"}}>DHCP</span>
                        </div>
                        <div className="serverdiv red">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span style={{fontSize:"13px"}}>DHCP</span>
                        </div>

                        <div className="serverdiv green">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span style={{fontSize:"13px"}}>WEB</span>
                        </div>

                        <div className="serverdiv red">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span style={{fontSize:"13px"}}>DHCP</span>
                        </div>

                        <div className="serverdiv green">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span id="type" style={{fontSize:"13px"}}>DNS</span>
                        </div>
                        <div className="serverdiv green">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span style={{fontSize:"13px"}}>WEB</span>
                        </div>

                        <div className="serverdiv red">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span style={{fontSize:"13px"}}>DHCP</span>
                        </div>

                        <div className="serverdiv red">
                        <img className="serverimg" src={server} alt="" />
                        <br />
                        <span id="type" style={{fontSize:"13px"}}>DNS</span>
                        </div>
                    </div>
                </div>

                <div className="sub3">Server Parameters
                <br />
                <br />

                <label for="cars">Server Type : </label>
<select name="Type" id="Type">
  <option value="volvo">DNS</option>
  <option value="saab">WEB</option>
  <option value="mercedes">DHCP</option>
  <option value="mercedes">Linux</option>
</select>

<br />
<br />
<label htmlFor="Ip">Server Name : </label>
                <input type="text" name="Ip" id="ip" />
<br />
<br />
                <label htmlFor="Ip">IP Adress  : </label>
                <input type="text" name="Ip" id="ip" />
<br />
<br />
                <label htmlFor="SubNet">SubNet Mas</label>
                <input type="text" name="SubNet" id="SubNet" />
                    <br />
                    <br />
                <label htmlFor="GateWay">Default GateWay</label>
                <input type="text" name="GateWay" id="GateWay" />
                <br />
                <br />
                <br />
                <br />
                <button style={{marginRight:"80px"}}>Save</button>
                
                <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Add