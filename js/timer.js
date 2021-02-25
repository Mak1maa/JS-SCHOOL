function CountdownTimer(obnm){
    var endct = 0; // it is set to 1 when script starts
    var ctmnts = 0; // minutes
    var ctsecs = 0; // seconds
    var cthors = 0; // hours
    var startchr = 0; // used to control when to read data from form, and script finished
    var ctpause = -1; // if -1, pause the script

    var el_showmns = document.getElementById('showmns');
    var el_showscs = document.getElementById('showscs');
    var el_mns = document.getElementById('mns');
    var el_scs = document.getElementById('scs');
    var el_btnct = document.getElementById('btnct');
    var el_btnct_res = document.getElementById('btnct_res');
    var el_btnct_end = document.getElementById('btnct_end');

    function startPauseCT(){
    if(parseInt(el_mns.value) > 0 || parseInt(el_scs.value) > 0 || endct == 1){
        ctpause *= -1;
        if(ctpause == 1){
            el_btnct.innerText = 'Пауза';
            window[obnm].countdownTimer();
            }else el_btnct.innerText = 'Возобновить';
        }
    }

    function endCT(){
        return false;
    }

    this.countdownTimer = function(){
        if(startchr == 0 && el_mns && el_scs){
            ctmnts = parseInt(el_mns.value);
            ctsecs = parseInt(el_scs.value);

            if(isNaN(ctmnts)) ctmnts = 0;
            if(isNaN(ctsecs)) ctsecs = 0;

            el_mns.value = ctmnts;
            el_scs.value = ctsecs;
            startchr = 1;
        }

        if(ctmnts > 0 || ctsecs > 0) endct = 1;

        if(ctmnts == 0 && ctsecs == 0 && endct == 1){
            startchr = 0;
            ctpause = -1;
            endct = 0;
            el_btnct.innerText = 'Старт';
            endCT();
        }else if(startchr == 1 && ctpause == 1){
            ctsecs--;
            if(ctsecs < 0){
                if(ctmnts > 0){
                    ctsecs = 59;
                    ctmnts--;
                }else{
                    ctsecs = 0;
                    ctmnts = 0;
                }
            }
            setTimeout(obnm + '.countdownTimer()', 1000);
        }
        el_showmns.innerHTML = ctmnts;
        el_showscs.innerHTML = ctsecs;
    }

    if(el_btnct) el_btnct.addEventListener('click', startPauseCT);

    if(el_btnct_res) el_btnct_res.addEventListener('click', function(){ 
        startchr = 0; 
        if(ctpause == -1) startPauseCT(); 
    });

    if(el_btnct_end) el_btnct_end.addEventListener('click', function(){
        el_mns.value = 0; 
        el_scs.value = 0; 
        startchr = 0; 
        startPauseCT(); 
    });
}

var obCT = new CountdownTimer('obCT');