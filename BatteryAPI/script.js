const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");


const battery = () =>{
   if('getBattery' in navigator){
    navigator.getBattery().then((battery)=>{
      function updateAllBatteryDetails(){
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeChangeInfo();
      } 
      updateAllBatteryDetails(); 
    //Battery Charging change
    battery.addEventListener('chargingchange',()=>{
        updateChargingInfo();
    });
    function updateChargingInfo(){
        const isCharging = battery.charging ? 'Yes': 'No';
        batteryCharging.innerHTML = isCharging;
    }
    //Battery charging time
    battery.addEventListener('chargingtimechange',()=>{
       updateChargingTimeChangeInfo()
    });
    function updateChargingTimeChangeInfo(){
       batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
    }
    //Battery discharging time
    battery.addEventListener('dischargingtimechange',()=>{
      updateDischargingTimeInfo();  
    });
     function updateDischargingTimeInfo(){
        batteryDisChargingTime.innerHTML = battery.disChargingTime + " seconds";
     }
    //Battery level change
    battery.addEventListener('levelchange', ()=>{
       updateLevelChange();
    });
    function updateLevelChange(){
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
    }
    });
   }
};

battery();