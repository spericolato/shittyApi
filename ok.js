const http = require('http');

const servere = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

if(req.url === '/'){
    res.end(`
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@####################$$$$$###@@@@@@@@##$$$$$$$$$$$$$$$$$$$$$$$$$$###@@@@@@@@@##$$$$$$$$$$$$$$$$$$$$$$$$$$###@@@@@@
    @@@@@@#$$=========================$#@@@@@@#$==************************==$$#@@@@@@@#$==***********************===$##@@@@@
    @@@@@#*--~~~~~------------,,,,,,,,,=#@@@@@$=.          ...................*#@@@@@#$-          ...................!#@@@@@
    @@@@#$!--~~~~~------------,,,,,,,,,*#@@@@#$*.          ...................!#@@@@@#=-         ....................!$#@@@@
    @@@@#$!--~~~~~------------,,,,,,,,,*$#@@@#=!.         ....................!#@@@@@$=-         ....................;$#@@@@
    @@@@#$!--~~~~~------------,,,,,,,,,!$#@@@#=!.         ...................,!#@@@@@$*,        ....................,;=#@@@@
    @@@@#$!--~~~~~-----------,,,,,,,,,,!$#@@@#=!.        ....................,!#@@@@#$*,        ....................,;=#@@@@
    @@@@#$!--~~~~~-----------,,,,,,,,,,!$#@@@#=!.        ....................,!#@@@@@$*,        ....................,;=#@@@@
    @@@@#$!--~~~~------------,,,,,,,,,,!$#@@@#=!.        ....................,!#@@@@@$*,       ....................,,;=#@@@@
    @@@@#$!--~~~~------------,,,,,,,,,,*$#@@@#=!.       ....................,,!#@@@@@$*,       ....................,,;=#@@@@
    @@@@#$!--~~~~------------,,,,,,,,,,*$@@@@#=!.       ...................,,,!#@@@@@$*,       ...................,,,;=#@@@@
    @@@@#$!-~~~~~------------,,,,,,,,,,=#@@@@#=!.       ...................,,,!#@@@@@$*-       ...................,,,;=#@@@@
    @@@@#$;------~~~~;!!******!!!!!!!**$#@@@@#=!.       ...................,,,!$@@@@@$*,      ....................,,,;=#@@@@
    @@@@#$;---------~;*=$$$$$$$$$$$$$$##@@@@@#=!.         .!**=**!;-          ;$@@@@@$*,          ;!**=**!~..........;=#@@@@
    @@@@#$!-------~~~!=$#############@@@@@@@@#=!.         .!*=$==*;-          ;$@@@@#$*,          ;*=$$==!~..........;=#@@@@
    @@@@#$!------~~~~!$#@@@@@@@@@@@@@@@@@@@@@#=!.         .*$###$=!-          ;$@@@@@$*,          !=$###$*:..........;=#@@@@
    @@@@#$!-----~~~~~!$#@@@@@@@@@@@@@@@@@@@@@#=!.         .=$#@@#=!~..        ;$@@@@@$*,          !=#@@@#=:..........;=#@@@@
    @@@@#$!---~~~~~~~!$#@@@@@@@@@@@@@@@@@@@@@$=!.        ..=$#@@#=!~...       ;$#@@@@$*,          !=#@@@#=:..........;=#@@@@
    @@@@#$!--~~~~~~~~!$#@@@@@@@@@@@@@@@@@@@##$*;.       ...*$###$=!-....      :=##@@@$*,          !=$###$*:..........;=#@@@@
    @@@@#$!~~~~~~~~~~!$#@@@@@@@@@@@@@@@@@##$=*!:.      ....!*=$==!;-......    :*=$###$*,          ;!====*!~..........;=#@@@@
    @@@@#$!~~~~~~~~~~!$#@@@@@@@@@@@@@@@@#$=*!;:~.    ......;;!!!!;:-.......   ~!**=$#$*,          :;!!!!!;~..........;=#@@@@
    @@@@#$!~~~~~~~~~-!$#@@@@@@@@@@@@@@@@#=-              .........................,,=$*,          ...................;=#@@@@
    @@@@#$!~~~~~~~~--!$#@@@@@@@@@@@@@@@#$*,             .........................,,,=$*,         ....................;=#@@@@
    @@@@#$!~~~~~~----!$#@@@@@@@@@@@@@@@#$*,             .........................,,,*$*-         ....................;=#@@@@
    @@@@#$!~~~~~-----!$#@@@@@@@@@@@@@@@#=!,             .........................,,,*$=-        .....................;=#@@@@
    @@@@#$!~~~-------!$#@@@@@@@@@@@@@@@#=!,            ..........................,,,*#=-        .....................;=#@@@@
    @@@@#$!~~--------!$#@@@@@@@@@@@@@@@#=!,             .........................,,,*#=-        .....................;=#@@@@
    @@@@#$!----------!$#@@@@@@@@@@@@@@@#=!,            .........................,,,,*#=-       ......................;=#@@@@
    @@@@#$!----------!$#@@@@@@@@@@@@@@@#$!,           ..........................,,,,*#=-       ......................;=#@@@@
    @@@@#$!----------!$#@@@@@@@@@@@@@@@#$*,           ..........................,,,,=#=-       ......................;$#@@@@
    @@@@#$!----------!$#@@@@@@@@@@@@@@@#$=-           ..........................,,,,=#=-      .......................!$#@@@@
    @@@@#$!----------!=#@@@@@@@@@@@@@@@##=:---,,. .........--------,..........-~~~~:$#=-     .....--------~~~~~~~~~~~*#@@@@@
    @@@@#$!----------;=$##################$=**;:..........,!**=**!;-..........:*==$###=-..........;!**==============$##@@@@@
    @@@@#$!----------;*==$$$$$$$$$$$$$######$=*;,.........,*=$$$=*;~..........:=$###@#=-..........;*=$$$$$$$$$$$$$###@@@@@@@
    @@@@#$!----------:;;;!!!;;;;;;;;!!!$#@@@#$=;,.........,=$#@#$=!~..........;$#@@@@#=-..........!=$#@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!~~~~~~---------------------,=#@@@@#=!,.........,=#@@@#$*~..........;$@@@@@#=-..........*$#@@@@@@@@@@@@@@@@@@@@@@@    
    @@@@#$!~~~~----------------------,,*$@@@@#=!,.........,=#@@@#$*~..........;$@@@@@$=-..........*$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!~~~----------------------,,,*$#@@@#=!,.........,=#@@@#$*~..........;$@@@@@$=-..........*$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!~----------------------,,,,,*$#@@@#=!,.........,=#@@@#$*~..........;$@@@@@$=-..........*$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!---------------------,,,,,,,!$#@@@#=!,.........,=#@@@#$*~..........;$@@@@@$*-..........*$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!--------------------,,,,,,,,!$#@@@#=!,.........,=#@@@#$*~..........;$@@@@@$=-..........*$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!-------------------,,,,,,,,,*$#@@@#=!,.........,=#@@@#$*~..........!#@@@@@$=-..........*$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@#$!------------------,,,,,,,,,,*$@@@@#$*,.........,$#@@@#$*:..........!#@@@@@#=-..........=$#@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@#*----------------,,,,,,,,,,,,*#@@@@#$=,.........,$#@@@@#=:..........!#@@@@@#$~..........=#@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@#=!;;;;;;;;;;;;;;;;;;;;::::;;;$#@@@@@#$;::::::::;;#@@@@@#$*:::::::::;=#@@@@@##!:::::::::;$#@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@##$$$$$$$$$$$$$$$$$$$$$$$$$$##@@@@@@##$$======$$#@@@@@@@#$$$=====$$##@@@@@@@##$$=====$$$#@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@############################@@@@@@@@@##########@@@@@@@@@##########@@@@@@@@@@@##########@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####
    @@@@@@@@@@@@@@@@@@@@@@@@=:~-~!#@@@$;~~~;$@@@*~--~:=#@@#~~-~-~*@@@@@@@@#;$@@@@#;$@@@@#~#@#;---~;=#@@@@@@@@@@@@@@#########
    @@@@@@@@@@@@@@@@@@@@@@@! ,,,, -#@= .,,,. =@@- ,,,, :#@$ .,,,,-@@@@@@@@= -@@@@$ -$@@@$ *@$..,,,. !#@@@@@@@@##############
    @@@@@@@@@@@@@@@@@@@@@@#,,$###* $@; =###=.~#@-,$##$! =@$ ;####@@@@@@@@#, .$@@@=  :#@@= !@$.;$$$=,,$@@@@@#################
    @@@@@@@@@@@@@@@@@@@@@@$.;@@@@#;##~-#@@@@!.#@--@@@@$.*@$ !@@@@@@@@@@@@= : !#@@= - ;#@= !@$.;#@@#! =######################
    @@@@@@@@@@@@@@@@@@@@@@$.!@@@@@@@#~-#@@@@*.#@--#@@@#.!@$ :==$@@@@@@@@#: =: $@@= !~.=#= !#$.;#@@#* =######################
    @@@@@@@@@@@@@@@@@@@@@@$.!@@@@@@@#~-#@@@@*.#@--@@@@#.!@$     #@@@@@@@$ !#* !@@= *=, == !#=.;####* =######################
    @@@@@@@@@@@@@@@@@@@@@@$.!@@@@@@@#~-#@@@@*.#@--@@@@#.!@$ ~**=@@@@@@@@; !=*.~$@= *#* ~! !#=.;####* *######################
    @@@@@@@@@@@@@@@@@@@@@@$.!@@@@#!##~-#@@@@!.#@--#@@@$.!@$ !@@@@@@@@@@#,      =#= *##* - !#=.;####* =##################$$$$
    @@@@@@@@@@@@@@@@@@@@@@#,-#@@@= $#: $@@@$--#@-,#@##* =@$ ;####@@@@@@= ;***!.~#= *##$~  !#=.;$$$=-.=##############$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@; ,---.,#@= ,---, !@@- ,--, ,#@$ .----:#@@@#~.$####~.$= *###=- !#=..,,,, :$##########$$$$$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@#!----~$@@@=-----*#@@;-,,,-;$@@#-,,,,,~#@@@#:!#####=~$$-=####=-=#$~,,,,,!$#######$$$$$$$$$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@@@@##@@@@@@@@####@@@@@######@@@@########@#####################$###$$$$$$$###$$$$$$$$$$$$$$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################$$$$$$$$$$$$$$$$$$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$===
    `)
}

else if(req.url === '/api/data'){
        switch(new Date().getDay()){
            case 1:
                res.end("أخبار يوم الاثنين");
                break
            case 2:
                res.end("أخبار يوم الثلثاء");
                break
            case 3:
                res.end("أخبار يوم الاربعاء");
                break
            case 4:
                res.end("أخبار يوم الخميس");
                break
            case 5:
                res.end("أخبار يوم الجمعة");
                break
            case 6:
                res.end("أخبار يوم السبت");
                break
            case 7:
                res.end("أخبار يوم الاحد");
                break
        }
}
else{
    res.statusCode = 404;
    res.end(`
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ██░▄░██░▄▄░██░▄░█████░▄▄░█░▄▄▀██░▄▄░██░▄▄▄████░▀██░██░▄▄▄░█▄▄░▄▄████░▄▄▄██░▄▄▄░██░██░██░▀██░██░▄▄▀
    █░▀▀░▀█░▀▄░█░▀▀░▀████░▀▀░█░▀▀░██░█▀▀██░▄▄▄████░█░█░██░███░███░██████░▄▄███░███░██░██░██░█░█░██░██░
    ████░██░▀▀░████░█████░████░██░██░▀▀▄██░▀▀▀████░██▄░██░▀▀▀░███░██████░█████░▀▀▀░██▄▀▀▄██░██▄░██░▀▀░
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

    `)
}
    
})

servere.listen(8080);