"use strict";

// Language support




const lang = {

  regex:{
    //----------------------------------------------------------------------------------------------
    // Regular Expressions for Commands
    
    // Meta commands
    MetaUnfinish:/^unfinish?$/,
    MetaHello:/^(?:hello|hi|yo)$|^\?$/,
    MetaHelp:/^help$|^\?$/,
    MetaHint:/^(?:hint|clue)s?$/,
    MetaCredits:/^(?:about|credits|version|info)$/,
    MetaDarkMode:/^(?:dark|dark mode|toggle dark|toggle dark mode)$/,
    MetaAutoScrollMode:/^(?:scroll|autoscroll|toggle scroll|toggle autoscroll)$/,
    MetaNarrowMode:/^(?:narrow|narrow mode|toggle narrow|toggle narrow mode|mobile|mobile mode|toggle mobile|toggle mobile mode)$/,
    MetaPlainFontMode:/^(?:font|plain font|plain fonts|fonts)$/,
    MetaWarnings:/^warn(?:ing|ings|)$/,
    MetaImages:/^images$/,
    MetaSilent:/^(?:sh|silent)$/,
    MetaSpoken:/^spoken$/,
    MetaIntro:/^intro$/,
    MetaBrief:/^brief$/,
    MetaTerse:/^terse$/,
    MetaVerbose:/^verbose$/,
    MetaTranscript:/^transcript$|^script$/,
    MetaTranscriptStart:/^transcript on$|^script start$/,
    MetaTranscriptOn:/^transcript on$|^script on$/,
    MetaTranscriptOff:/^transcript off$|^script off$/,
    MetaTranscriptClear:/^transcript clear$|^script clear$|^transcript delete$|^script delete$/,
    MetaTranscriptShow:/^transcript show$|^script show$|^show script$|^show transcript$|^showscript$/,
    MetaTranscriptWalkthrough:/^(?:transcript|script) walk$/,
    MetaUserComment:/^(?:\*|\;)(.+)$/,
    MetaSave:/^save$/,
    MetaSaveGame:/^(?:save) (.+)$/,
    MetaFileSaveGame:/^(?:fsave) (.+)$/,
    MetaSaveOverwriteGame:/^(?:save) (.+) (?:overwrite|ow)$/,
    MetaLoad:/^(?:load|reload|restore)$/,
    MetaLoadGame:/^(?:load|reload|restore) (.+)$/,
    MetaFileLoadGame:/^(?:fload|freload|frestore)$/,
    MetaDir:/^(?:reload|load|restore|dir|directory|ls|save ls|save dir)$/,
    MetaDeleteGame:/^(?:delete|del) (.+)$/,
    MetaUndo:/^undo$/,
    MetaAgain:/^(?:again|g)$/,
    MetaOops:/^(?:oops)$/,
    MetaDebugScope:/^(?:debug scope|отладка scope)$/,
    MetaRestart:/^restart$/,
    MetaScore:/^score$/,
    MetaAchievements:/^(?:achievements|achievement|achieve|ach)(| all| com\w*| out\w*)$/,
    MetaPronouns:/^pronouns$/,
    MetaTopicsNote:/^topics?$/,

    // Kind of meta    
    Look:/^l$|^look$|^describe (?:room|the room|location|the location|where i am|here)$/,
    Exits:/^exits$/,
    Map:/^map$/,
    Inv:/^inventory$|^inv$|^i$/,

    // Misc
    Wait:/^wait$|^z$/,
    Climb:/^climb$/,
    Up:/^(?:up|u)$/,  // could be GO UP or STAND UP so handle separately
    Back:/^back$|^go back$|^return$/,
    //Smell:/^smell$|^sniff$/,
    //Listen:/^listen$/,
    PurchaseFromList:/^buy$|^purchase$/,
    //OneWord:/^(pray|jump|sing|dance|listen|smell|sniff|whistle)$/,
    OneWord:[
      /^(pray)$/,
      /^(jump)$/,
      /^(sing)$/,
      /^(dance)$/,
      /^(listen)$/,
      /^(smell)$/,
      /^(sniff)$/,
      /^(whistle)$/,
      /^(sleep)$/,
      /^(nap)$/,
    ],
    
    // Use item
    Examine:/^(?:examine|exam|ex|x|describe) (.+)$/,
    LookAt:/^(?:look at|look|l) (.+)$/,
    LookOut:/^(?:look out of|look out) (.+)$/,
    LookBehind:/^(?:look behind|check behind) (.+)$/,
    LookUnder:/^(?:look under|check under) (.+)$/,
    LookInside:/^(?:look inside|look in) (.+)$/,
    LookThrough:/^(?:look|peek|peer) (?:down|through) (.+)$/,
    Search:/^(?:search) (.+)$/,
    Take:/^(?:take|get|pick up|pick|t|grab|hold|carry) (.+)$/,
    Drop:/^(?:drop|d|discard) (.+)$/,
    Wear2:/^put (?:my |your |his |her |)(.+) on$/,
    Wear:/^(?:wear|don|put on) (?:my |your |his |her |)(.+)$/,
    Remove:/^(?:remove|doff|take off|unwear|disrobe) (?:my |your |his |her |)(.+)$/,
    Remove2:/^take (?:my |your |his |her |)(.+) off$/,
    Read:/^(?:read|r) (.+)$/,
    SmellItem:/^(?:smell|sniff) (.+)$/,
    TasteItem:/^(?:taste|lick|tongue) (.+)$/,
    ListenToItem:/^(?:listen to|listen) (.+)$/,
    Purchase:/^(?:purchase|buy) (.+)$/,
    Sell:/^(?:sell) (.+)$/,
    Smash:/^(?:smash|break|destroy|burst|pierce|puncture|bust|crack|wreck) (.+)$/,
    Turn:/^(?:turn|rotate|twist|screw|unscrew) (.+)$/,
    TurnLeft:/^(?:turn|rotate|twist|screw|unscrew) (.+) (?:left|anticlockwise|anti-clockwise|widdershins)$/,
    TurnRight:/^(?:turn|rotate|twist|screw|unscrew) (.+) (?:right|clockwise)$/,
    SwitchOn:/^(?:turn on|switch on|active|enable) (.+)$/,
    SwitchOn2:/^(?:turn|switch) (.+) on$/,
    SwitchOff2:/^(?:turn|switch|deactivate|disable) (.+) off$/,
    SwitchOff:/^(?:turn off|switch off) (.+)$/,
    Open:/^(?:open|unwrap) (.+)$/,
    OpenWith:[
      /^(?:open) (?<item>.+) (?:with|using) (?<obj>.+)$/,
      /^(?:use|with|using) (?<obj>.+?) (?:to open|open) (?<item>.+)$/,
    ],
    Close:/^(?:close|cover|shut) (.+)$/,
    Lock:/^(?:lock) (.+)$/,
    LockWith:[
      /^(?:lock) (?<item>.+) (?:with|using) (?<obj>.+)$/,
      /^(?:use|with|using) (?<obj>.+?) (?:to lock|lock) (?<item>.+)$/,
    ],
    Unlock:/^(?:unlock) (.+)$/,
    UnlockWith:[
      /^(?:unlock) (?<item>.+) (?:with|using) (?<obj>.+)$/,
      /^(?:use|with|using) (?<obj>.+?) (?:to unlock|unlock) (?<item>.+)$/,
    ],
    
    ClimbUpVerb:/^(?:climb up|climb|go up|ascend|scale) (.+)$/,
    ClimbDownVerb:/^(?:climb down|go down|descend) (.+)$/,
    Push:/^(?:push|press) (.+)$/,
    Pull:/^(?:pull|drag) (.+)$/,
    Fill:/^(?:fill) (.+)$/,
    Empty:/^(?:empty|discharge|decant|pour out|pour) (.+)$/,
    
    // Vari-verbs
    // Want the verb saved, but for convenience we have it at the end
    Eat:[{regex:/^(eat|feed on|feed|partake of|partake|dine on|dine|nibble) (.+)$/, mod:{reverse:true}}],
    Drink:[{regex:/^(drink|imbibe|quaff|guzzle|knock back|swig|swill|sip|down|chug) (.+)$/, mod:{reverse:true}}],
    Ingest:[{regex:/^(consume|swallow|ingest) (.+)$/, mod:{reverse:true}}],
    Hit:[{regex:/^(attack|strike|hit|kick|hurt|fight|punch|murder|kill|slaughter) (.+)$/, mod:{reverse:true}}],
    Clean:/^(?<verb>clean|rub|dust|polish|shine) (?<item>.+)$/,
    
    Sit:/^(?:sit down|sit)$/,
    Recline:/^(?:recline|lie down|lie)$/,
    SitOn:/^(?:sit on|sit upon|sit) (.+)$/,
    StandOn:/^(?:stand on|stand upon|stand) (.+)$/,
    ReclineOn:/^(?:recline on|recline upon|recline|lie on|lie upon|lie) (.+)$/,
    GetOff:/^(?:get off|off) (.+)$/,
    Use:/^(?:use) (.+)$/,
    TalkTo:/^(?:talk to|talk|speak to|speak|converse with|converse) (.+)$/,
    Topics:/^topics? (?:for )?(.+)$/,

    Make:/^(?:make|build|construct) (.+)$/,
    MakeWith:[
      /^(?:make|build|construct) (.+) (?:with|from|using) (.+)$/,
      {regex:/^(?:with:from|using) (.+) (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(?:use) (.+) to (?:make|build|construct) (.+)$/, mod:{reverse:true}},
    ],
    NpcMake:[
      /^(.+), ?(?:make|build|construct) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:make|build|construct) (.+)$/,
    ],
    NpcMakeWith:[
      /^(.+), ?(?:make|build|construct) (.+) (?:with|from|using) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:make|build|construct) (.+) (?:with|from|using) (.+)$/,
      {regex:/^(.+), ?(?:with:from|using) (.+) (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(?:tell|ask|instruct) (.+) to (?:with:from|using) (.+) (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(.+), ?(?:use) (.+) to (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(?:tell|ask|instruct) (.+) to (?:use) (.+) to (?:make|build|construct) (.+)$/, mod:{reverse:true}},
    ],
    
    GoInItem:/^(?:enter|go in|in|inside|go inside|climb in|climb inside|get in|get inside) (.+)$/,
    GoOutItem:/^(?:exit|go out|out|outside|go outide|leave) (.+)$/,
    GoUpItem:/^(?:go up|up|climb up|climb|ascend) (.+)$/,
    GoDownItem:/^(?:go down|down|climb down|descend) (.+)$/,
    GoThroughItem:/^(?:go through|walk through) (.+)$/,
    NpcGoInItem:[
      /^(.+), ?(?:enter|go in|in|inside|go inside|climb in|climb inside|get in|get inside) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:enter|go in|in|inside|go inside|climb in|climb inside|get in|get inside) (.+)$/,
    ],
    NpcGoOutItem:[
      /^(.+), ?(?:exit|go out|out|outside|go outide|leave) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:exit|go out|out|outside|go outide|leave) (.+)$/,
    ],
    NpcGoUpItem:[
      /^(.+), ?(?:go up|up|climb up|climb|ascend) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:go up|up|climb up|climb|ascend) (.+)$/,
    ],
    NpcGoDownItem:[
      /^(.+), ?(?:go down|down|climb down|descend) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:go down|down|climb down|descend) (.+)$/,
    ],
    NpcGoThroughItem:[
      /^(.+), ?(?:go through|walk through) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:go through|walk through) (.+)$/,
    ],
    
    // Misc again
    Say:/^(say|shout|whisper|holler|scream|yell) (.+)$/,
    Tone:/^(?:tone|mood|attitude) (.+)$/,
    Stand:/^stand$|^stand up$|^get up$/,
    NpcStand:[/^(.+), ?(?:stand|stand up|get up)$/, /^(?:tell|ask|instruct) (.+) to (?:stand|stand up|get up)$/],
    GetFluid:/^(?:get|take|scoop|pick|grab)(?:| up) (.+)$/,
    FillWith:/^(?:fill) (.+) (?:with) (.+)$/,
    NpcFillWith:[/^(.+), ?(?:fill) (.+) (?:with) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:fill) (.+) (?:with) (.+)$/],

    EmptyInto:/^(?:empty|pour out|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/,
    NpcEmptyInto:[/^(.+), ?(?:empty|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:empty|pour|discharge) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/],
    EmptyFluidInto:/^(?:empty|pour out|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/,
    NpcEmptyFluidInto:[/^(.+), ?(?:empty|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:empty|pour|discharge) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/],
    PutFluidIn:/^(?:put|place|drop) (.+) (?:in to|into|in|on to|onto|on) (.+)$/,

    PutIn:/^(?:put|place|drop) (.+) (?:in to|into|in|on to|onto|on) (.+)$/,
    NpcPutIn:[/^(.+), ?(?:put|place|drop|insert) (.+) (?:in to|into|in|on to|onto|on) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:put|place|drop) (.+) (?:in to|into|in|on to|onto|on) (.+)$/],
    TakeOut:/^(?:take|get|remove) (.+) (?:from|out of|out|off of|off) (.+)$/,
    NpcTakeOut:[/^(.+), ?(?:take|get|remove) (.+) (?:from|out of|out|off of|off) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:take|get|remove) (.+) (?:from|out of|out|off of|off) (.+)$/],
    GiveTo:/^(?:give|offer|proffer|feed) (.+) (?:to) (.+)$/,
    NpcGiveTo:[/^(.+), ?(?:give|offer|proffer|feed) (.+) (?:to) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:give|offer|proffer) (.+) (?:to) (.+)$/],
    Give:/^(?:give|offer|proffer) (.+)$/,
    NpcGive:[/^(.+), ?(?:give|offer|proffer) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:give|offer|proffer) (.+)$/],
    //NpcGiveToMe:[/^(.+), ?(?:give) me (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:give) me (.+)$/],

    TieUp:/^(?:tie|fasten|attach|connect|hook) (.+)$/,
    TieTo:/^(?:tie|fasten|attach|connect|hook) (.+) (?:to) (.+)$/,
    NpcTieUp:[/^(.+), ?(?:tie|fasten|attach|connect|hook) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:tie|fasten|attach) (.+)$/],
    NpcTieTo:[/^(.+), ?(?:tie|fasten|attach|connect|hook) (.+) (?:to) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:tie|fasten|attach) (.+) (?:to) (.+)$/],
    Untie:/^(?:untie|unfasten|detach|disconnect|unhook) (.+)$/,
    NpcUntie:[/^(.+), ?(?:untie|unfasten|detach|disconnect|unhook) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:untie|unfasten|detach) (.+)$/],
    UntieFrom:/^(?:untie|unfasten|detach) (.+) (?:from) (.+)$/,
    NpcUntieFrom:[/^(.+), ?(?:untie|unfasten|detach) (.+) (?:frm) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:untie|unfasten|detach) (.+) (?:from) (.+)$/],
    UseWith:/^(?:use) (.+) (?:with|on) (.+)$/,




    /*LookExit:/^(?:look|peer|l|glance) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,

    PushExit:/^(push|pull|move|shift) (.+) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,
    NpcPushExit:[
      /^(.+), ?(push|pull|move|shift) (.+) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,
      /^(?:tell|ask|instruct) (.+) to (push|pull|move|shift) (.+) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,
    ],*/
    LookExit:/^(?:look|peer|l|glance) (.+)$/,

    PushExit:/^(push|pull|move|shift) (.+) (.+)$/,
    NpcPushExit:[
      /^(.+), ?(push|pull|move|shift) (.+) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (push|pull|move|shift) (.+) (.+)$/,
    ],
    
    
    
    
    AskAbout:/^(?:ask) (.+?) (about|what|who|how|why|where|when) (.+)$/,
    TellAbout:/^(?:tell) (.+?) (about|what|who|how|why|where|when) (.+)$/,
    TalkAbout:[
      /^(?:talk to|talk with|talk|speak to|speak with|speak) (.+?) about (what|who|how|why|where|when) (.+)$/,
      /^(?:talk to|talk with|talk|speak to|speak with|speak) (.+?) (about|what|who|how|why|where|when) (.+)$/,
    ],
    FollowMe:[/^(.+), ?(?:follow|follow me)$/, /^(?:tell|ask|instruct) (.+) to (?:follow|follow me)$/],    
    WaitHere:[
      /^(.+), ?(?:stop follow|stop following|stop follow me|stop following me|wait|wait here|stay|stay here)$/,
      /^(?:tell|ask|instruct) (.+) to (?:stop follow|stop following|stop follow me|stop following me|wait|wait here|stay|stay here)$/,
    ],    
    
    
    //Debug
    DebugWalkThrough:/^wt (.+)$/,
    DebugInspect:/^inspect (.+)$/,
    DebugInspectByName:/^inspect2 (.+)$/,
    DebugWarpName:/^warp (.+)$/,
    DebugTest:/^test$/,
    DebugInspectCommand:/^(?:cmd|command) (.+)$/,
    DebugListCommands:/^(?:cmd|command)s$/,
    DebugListCommands2:/^(?:cmd|command)s2$/,
    DebugParserToggle:/^parser$/,
    DebugStats:/^stats?$/,
    DebugHighlight:/^highlight$/,
  },

  // This will be added to the start of the regex of a command to make an NPC command
  // The saved capture group is the NPC's name
  tell_to_prefixes:{
    1:'(?:tell|ask|instruct) (?<char>.+) to ',   // TELL KYLE TO GET SPOON
    2:'(?<char>.+), ?',                 // KYLE, GET SPOON
  },



  //----------------------------------------------------------------------------------------------
  // Standard Responses



  // TAKEABLE
  take_successful:"{nv:char:take:true} {nm:item:the}{ifIs:params:excess:true:, больше нет}.",
  take_successful_counted:"{nv:char:take:true} {number:count} {nm:item}.",
  drop_successful:"{nv:char:drop:true} {nm:item:the}{ifIs:params:excess:true:, это всё, что было}.",
  drop_successful_counted:"{nv:char:drop:true} {number:count} {nm:item}.",
  cannot_take:"{multi}{pv:char:can't:true} взять {ob:item}.",
  cannot_drop:"{multi}{pv:char:can't:true} бросить {ob:item}.",
  not_carrying:"{multi}У {ob:char} нет {if:item:countable:ни одного:{ob:item}}.",
  already_have:"{multi}Это уже есть у {ob:char}.",
  cannot_take_component:"{multi}{pv:char:can't:true} взять {ob:item}; это часть {nm:whole:the}.",


  // EDIBLE
  eat_successful:"{nv:char:eat:true} {nm:item:the}.",
  drink_successful:"{nv:char:drink:true} {nm:item:the}.",
  cannot_eat:"{nm:item:the:true} не то, что можно съесть.",
  cannot_drink:"{nm:item:the:true} не то, что можно выпить.",
  cannot_ingest:"{nm:item:the:true} не то, что можно проглотить.",
  
  
  


  // WEARABLE
  wear_successful:"{nv:char:wear:true} {nm:item:the}.",
  remove_successful:"{nv:char:take:true} {nm:item:the} с себя.",
  cannot_wear:"{multi}{nv:char:can't:true} надеть {ob:item}.",
  cannot_wear_ensemble:"{multi}Части комплекта нужно надевать и снимать по отдельности.",
  not_wearing:"{multi}Этот предмет сейчас не надет.",
  cannot_wear_over:"{nv:char:can't:true} надеть {nm:item:the} поверх {nm:outer}.",
  cannot_remove_under:"{nv:char:can't:true} снять {nm:item:the}, пока сверху находится {nm:outer}.",
  already_wearing:"{multi}Этот предмет уже надет.",
  invWearingPrefix:"на себе",
  invHoldingPrefix:"в руках",


  // CONTAINER, etc.
  open_successful:"{nv:char:open:true} {nm:container:the}.",
  close_successful:"{nv:char:close:true} {nm:container:the}.",
  lock_successful:"{nv:char:lock:true} {nm:container:the}.",
  unlock_successful:"{nv:char:unlock:true} {nm:container:the}.",
  close_and_lock_successful:"{nv:char:close:true} {nm:container:the} и {cj:char:lock} {ob:container}.",
  open_successful_item:"{nv:char:open:true} {nm:item:the}.",
  close_successful_item:"{nv:char:close:true} {nm:item:the}.",
  lock_successful_item:"{nv:char:lock:true} {nm:item:the}.",
  unlock_successful_item:"{nv:char:unlock:true} {nm:item:the}.",
  close_and_lock_successful_item:"{nv:char:close:true} {nm:item:the} и {cj:char:lock} {ob:item}.",
  cannot_open:"{nm:item:the:true} нельзя открыть.",
  cannot_open_with:"{nv:char:can't:true} открыть это с помощью {nm:secondItem:the}.",
  cannot_lock_with:"{nv:char:can't:true} запереть это с помощью {nm:secondItem:the}.",
  cannot_unlock_with:"{nv:char:can't:true} отпереть это с помощью {nm:secondItem:the}.",
  cannot_close:"{nm:item:the:true} нельзя закрыть.",
  cannot_lock:"{nv:char:can't:true} запереть {ob:item}.",
  cannot_unlock:"{nv:char:can't:true} отпереть {ob:item}.",
  not_container:"{nm:container:the:true} не контейнер.",
  not_container_not_vessel:"{nm:container:the:true} не контейнер. Это сосуд — другое дело, ясно?",
  container_recursion:"Что? {nv:char:want:true} положить {nm:item:the} в {nm:container:the}, когда {nm:container:the} уже в {nm:item:the}? Слишком странно.",
  not_inside:"{nm:item:the:true} не внутри.",
  locked:"Заперто.",
  locked_item:"Заперто.",
  no_key:"Нет подходящего ключа.",
  locked_exit:"Этот путь заперт.",
  open_and_enter:"{nv:char:open:true} {show:doorName} и {cj:char:enter} внутрь.",
  unlock_and_enter:"{nv:char:unlock:true} {show:doorName}, {cj:char:open} и {cj:char:enter} внутрь.",
  try_but_locked:"{nv:char:try:true} открыть {show:doorName}, но заперто.",
  container_closed:"Закрыто.",
  inside_container:"{nm:item:the:true} внутри {nm:container:the}.",
  look_inside:"Внутри {nm:container:the} видно: {show:list}.",
  look_inside_it:"Внутри {nm:container:the} видно: {show:list}.",
  
  
  // MECHANDISE
  purchase_successful:"{nv:char:buy:true} {nm:item:the} за {money:money}.",
  sell_successful:"{nv:char:sell:true} {nm:item:the} за {money:money}.",
  cannot_purchase_again:"{nv:char:can't:true} купить {nm:item:the} здесь — этот предмет уже у {ob:char}.",
  cannot_purchase_here:"{nv:char:can't:true} купить {nm:item:the} здесь.",
  cannot_afford:"{nv:char:can't:true} позволить себе {nm:item:the} (нужно {money:money}).",
  cannot_sell_here:"{nv:char:can't:true} продать {nm:item:the} здесь.",


  // BACKDROP
  default_scenery:"Это просто фон, ничего особенного.",

  // FURNITURE
  sit_on_successful:"{nv:char:sit:true} на {nm:item:the}.",
  stand_on_successful:"{nv:char:stand:true} на {nm:item:the}.",
  recline_on_successful:"{nv:char:lie:true} на {nm:item:the}.",
  cannot_stand_on:"На {nm:item:the} нельзя встать.",
  cannot_sit_on:"На {nm:item:the} нельзя сесть.",
  cannot_recline_on:"На {nm:item:the} нельзя лечь.",
  no_sit_object:"Здесь не на чем сидеть.",
  no_recline_object:"Здесь не на чем лечь.",


  // SWITCHABLE
  switch_on_successful:"{nv:char:switch:true} {nm:item:the} — теперь включено.",
  switch_off_successful:"{nv:char:switch:true} {nm:item:the} — теперь выключено.",
  cannot_switch_on:"{nv:char:can't:true} включить {ob:item}.",
  cannot_switch_off:"{nv:char:can't:true} выключить {ob:item}.",


  // VESSEL
  fill_successful:"{nv:char:fill:true} {nm:item:the}.",
  empty_into_successful:"{nv:char:empty:true} {nm:source:the} в {nm:item:the}.",
  empty_onto_successful:"{nv:char:empty:true} {nm:source:the} на {nm:item:the} — всё стекает на пол.",
  empty_successful:"{nv:char:empty:true} {nm:source:the} на пол — всё впитывается.",
  already_empty:"Внутри уже пусто.",
  cannot_fill:"{nm:item:the:true} нельзя наполнить.",
  cannot_mix:"В {nm:item:the} нельзя смешивать жидкости.",
  not_vessel:"{nm:item:the:true} не сосуд.",
  not_sink:"Налить жидкость в {nm:item:the} — только устроить лужу.",
  not_source:"Из {nm:source:the} нельзя взять жидкость.",
  cannot_get_fluid:"{nv:char:try:true} зачерпнуть {show:fluid}, но всё проскальзывает сквозь пальцы. Нужен сосуд.",
  no_fluid_here:"Здесь нет: {show:fluid}.",
  no_fluid_here_at_all:"Здесь нечем наполнить.",
  not_a_fluid_here:"Не знаю жидкости (или подобного) с именем {show:text}.",
  already_full:"{nm:item:the:true} уже полон: {show:fluid}.",
  pour_into_self:"Нельзя налить из сосуда в него же!",
  no_generic_fluid_here:"Здесь нечем наполнить {nm:item:the}.",
  not_carrying_fluid:"У {nm:char:the} нет ничего с {show:fluid}.",

  // VESSEL (but source is referred to as "item" as it is caught by the general item handling)
  cannot_empty:"{nm:item:the:true} нельзя опустошить.",



  // CONSTRUCTION
  component_wrong:"Из {nm:wrong:a} нельзя сделать {nm:item:a}.",
  component_missing:"Чтобы собрать {nm:item:a}, нужен {nm:missing:a}.",
  construction_done:"{nv:char:build:true} {nm:item:a} из {show:list}.",
  construction_already:"Сборка {nm:item:the} уже завершена.",
  

  // NPC
  not_npc:"Можно сколько угодно приказывать {nm:item:the}, но вряд ли {pv:item:will} слушаться.",
  not_npc_for_give:"Реалистично: {nm:item:the} не интересует ничего из того, что можно дать.",
  not_interested_for_give:"{nm:item:the:true} не интересует {ob:npc}.",
  cannot_follow:"{nv:char:say:true}: «За мной». Но {nm:npc:the} — неодушевлённый предмет, поэтому реакции нет.",
  cannot_wait:"{nv:char:say:true}: «Жди здесь». {nm:item:the:true} и так никуда не собирается.",
  already_following:"«Я и так за тобой!»",
  already_waiting:"«Я уже жду!»",
  npc_agrees:"{nv:npc:nod:true} головой.",

  cannot_ask_about:"Можно спрашивать {ob:item} про {show:text} сколько угодно — ответа не будет.",
  cannot_tell_about:"Можно рассказывать {ob:item} про {show:text} сколько угодно — интереса нет.",
  cannot_talk_about:"Можно говорить с {ob:item} про {show:text} сколько угодно — интереса нет.",
  topics_no_ask_tell:"У этого персонажа нет вариантов ASK/TELL ABOUT.",
  topics_none_found:"Нет подсказок, о чём спросить или рассказать {nm:item:the}.",
  topics_ask_list:"Можно спросить {nm:item:the} о: {show:list}.",
  topics_tell_list:"Можно рассказать {nm:item:the} о: {show:list}.",
  cannot_talk_to:"{nv:char:chat:true} с {nm:item:the} немного, но ответа нет.",
  no_topics_now:"Сейчас не о чем говорить с {nm:item:the}.",
  no_topics:"Вряд ли это скажет что-то по делу.",
  not_able_to_hear:"Сомнительно, что {nm:item:the} заинтересует что-либо из сказанного.",
  npc_no_interest_in:"Эта тема неинтересна.",
  not_a_tone:'Не знаю такого тона/настроения/манеры "{show:text}".',
  tone_is_now:"Тон игрока теперь: {show:text}.",
  npc_dead:"{nm:char:the:true} не подаёт признаков жизни.",
  search_npc_failure:"{nv:char:suspect:true}, что {nm:item:the} не оценит копание в карманах.",


  // BUTTON
  press_button_successful:"{nv:char:press:true} {nm:item:the}.",


  // SHIFTABLE
  push_exit_successful:"{nv:char:push:true} {nm:item:the} {show:dir}.",
  cannot_push:"{nm:item:the:true} так не сдвинуть.",
  cannot_push_up:"Поднять {nm:item:the} туда не получится!",
  take_not_push:"Просто возьми уже!",


  // ROPE
  rope_examine_attached_both_ends:" {item.attachedVerb} и к {nm:obj1:the}, и к {nm:obj2:the}.",
  rope_examine_attached_one_end:" {item.attachedVerb} к {nm:obj1:the}.",
  rope_attach_verb:'привязать',
  rope_attached_verb:'крепится',
  rope_detach_verb:'отвязать',
  rope_one_end:'Один конец',
  rope_other_end:'Другой конец',
  rope_examine_end_attached:'{item.attachedVerb} к {nm:obj:the}.',
  rope_examine_end_held:'держит {nm:holder:the}.',
  rope_examine_end_headed:'уходит в {nm:loc:the}.',
  rope_no_attachable_here:"Здесь не к чему привязать {nm:item:the}.",
  rope_not_attachable_to:"К этому нельзя привязать {nm:item:the}.",
  rope_not_detachable:"Это нельзя ни к чему привязать и ни от чего отвязать.",
  rope_tied_both_ends_already:"Оба конца {nm:item:the} уже закреплены на {nm:obj1:the} и {nm:obj12:the}.",
  rope_not_attachable:"Это нельзя ни к чему привязать.",
  rope_not_attached:"Ни один конец {nm:item:the} ни к чему не прикреплён.",
  rope_detach_end_ambig:"Какой конец {nm:item:the} отвязать?",
  rope_not_attached_to:"Ни один конец {nm:item:the} не прикреплён к {nm:obj:the}.",
  rope_tethered:"Нельзя отвязать {nm:item:the} от {nm:obj:the}.",
  rope_attach_success:"{nv:char:attach:true} {nm:item:the} к {nm:obj:the}.",
  rope_detach_success:"{nv:char:detach:true} {nm:item:the} от {nm:obj:the}.",
  rope_cannot_move:"Длины {nm:item:the} не хватает — дальше пройти нельзя.",
  rope_wind:"{nv:char:wind:true} {nm:item:the}.",
  rope_unwind:"{nv:item:unwind:true} за {nm:char:the}.",
  rope_tied_both_end:"Оба конца закреплены.",
  rope_tied_one_end:"Один конец закреплён.",
  rope_no_end:"Не видно ни одного конца {nm:item:the}.",


  // TRANSIT
  transit_already_here:"{nv:char:press:true} кнопку — ничего не происходит.",
  transit_go_to_dest:"{nv:char:press:true} кнопку — дверь закрывается...",

  // Movement
  go_successful:"{nv:char:head:true} {show:dir}.",
  not_that_way:"{nv:char:can't:true} пойти {show:dir}.",
  no_look_that_way:"{nv:char:can't:true} увидеть ничего интересного {show:dir}.",
  default_look_exit:"{nv:char:look:true} {show:dir} — там точно есть выход.",
  can_go:"Можно пойти: {exits}.",
  cannot_go_in:"В {nm:item:the} нельзя залезть.",
  cannot_go_out:"Из {nm:item:the} нельзя выйти.",
  cannot_go_up:"По {nm:item:the} нельзя подняться.",
  cannot_go_down:"По {nm:item:the} нельзя спуститься.",
  cannot_go_through:"Сквозь {nm:item:the} нельзя пройти.",
  no_back:"Сначала нужно куда-то пойти, чтобы вернуться.",
  cannot_back:"Кажется, этим путём назад не пройти.",
  cannot_climb_item:"На {nm:item:the} нельзя залезть.",
  cannot_climb:"Здесь не на что залезть.",
  climb_ambiguity:"Нужно уточнить: вверх или вниз?",
  not_a_direction:'Ожидалось направление, а получено "{show:text}".',


  // General cannot Messages
  cannot_read:"Здесь нечего читать.",
  cannot_use:"Неясно, как использовать {ob:item}.",
  cannot_smash:"{if:item:npc:Это не очень мило.:{nm:item:the:true} нельзя сломать.}",
  cannot_turn:"{nm:item:the:true} нельзя повернуть.",
  cannot_look_out:"Из этого нельзя выглянуть.",
  cannot_taste:"Не стоит всё подряд облизывать!",
  cannot_smell:"{nm:item:the:true} ничем не пахнет.",
  cannot_listen:"{nm:item:the:true} не издаёт звуков.",
  cannot_attack:"{if:item:npc:Точно не хочется делать это с {nm:item:the}!:Бессмысленный вандализм ни к чему не приведёт.}",
  cannot_clean:"{if:item:npc:{nm:item:the:true} сам разберётся с гигиеной.:Домашнюю работу оставь другим — тебе есть чем заняться.}",


  // General command messages
  not_known_msg:"Даже не знаю, с чего начать.",
  disambig_msg:"Что именно?",
  no_multiples_msg:"С этой командой нельзя указать несколько предметов.",
  nothing_msg:"Не с чем это сделать.",
  general_obj_error:"В целом ясно, что делать, но непонятно — с чем.",
  done_msg:"{multi}Готово.",
  nothing_for_sale:"Здесь ничего не продаётся.",
  wait_msg:"Время идёт...",
  no_map:"Карты нет.",
  inventory_prefix:"У тебя с собой",
  no_receiver:"Здесь некому ничего давать.",


  //generic one word commands
  oneWordSubsts:{
    sniff:'smell',
    nap:'sleep',
  },
  //when translating to another language, you need to translate the verb too, so no_sens for French instead of no_smell
  no_smell:"Здесь ничего не пахнет особо.",
  no_listen:"Здесь не слышно ничего особенного.",
  no_pray:"{nv:char:pray:true} всем известным богам — никто не откликается.",
  no_sing:"{nv:char:sing:true} {random:короткую:весёлую:грустную:жуткую:бодрую} {random:балладу:песню:мелодию:арию:оду}. Ничего не происходит.",
  no_dance:"{nv:char:dance:true} {random:энергичное:соблазнительное:жаркое} {random:танго:вальс:румбу:джигу}. Ничего необычного не происходит.",
  no_whistle:"{nv:char:whistle:true} {random:короткий:весёлый:грустный:жуткий:бодрый} {random:мотив:мотивчик}. Ничего не происходит.",
  no_jump:"{nv:char:jump:true} вверх... и тут же снова оказывается на земле.",
  no_sleep:"Не время спать!",
  
  
  // General command fails
  nothing_there:"Там точно ничего нет.",
  nothing_inside:"Внутри нечего смотреть.",
  not_open:"Сначала нужно открыть.",
  it_is_empty:"Внутри пусто.",
  not_here:"{nm:item:the:true} не здесь.",
  char_has_it:"{multi}Это находится у {ob:holder}.",
  none_here:"Здесь нет: {nm:item}.",
  none_held:"У {ob:char} такого нет: {nm:item}.",
  nothing_useful:"Из этого толку не будет.",
  already:"Это уже сделано.",
  default_examine:"Ничего необычного: {nm:item:the}.",
  not_enough:"Здесь только {show:count} {nm:item}.",
  it_is_dark:"Темно.",
  abort_cmds:"Остальные команды отменены",
  not_implemented:'Похоже, этой возможности в игре нет.',
  
  error:"Ой, при обработке команды произошла ошибка (F12 — подробности).",
  
  


  //----------------------------------------------------------------------------------------------
  // Complex responses (requiring functions)

  // Used deep in the parser, so prefer to use function, rather than string
  object_unknown_msg:function(name) {
    return "Здесь нет ничего, что можно было бы назвать «" + name + "».";
  },


  // For furniture
  stop_posture:function(char) {
    if (!char.posture) return ""
    if (!char.postureFurniture && char.posture === "standing") return ""
    const options = {char:char}
    if (w[char.postureFurniture]) options.item = w[char.postureFurniture]
    char.posture = "standing"
    char.postureFurniture = false
    return processText(options.item ? "{nv:char:get:true} с {nm:item:the}." : "{nv:char:stand:true}.", options)
  },



  // use (or potentially use) different verbs in the responses, so not simple strings
  say_no_one_here:"{nv:char:say:true}: «{show:text}» — но никто не замечает.",
  say_no_response: "Кажется, никого не интересует, что {nv:char:say}.",
  say_no_response_full: "{nv:char:say:true}: «{show:text}» — но никто не обращает внимания.",
  say_something:"{nv:char:say:true}: «{show:text}».",

  // If the player does SPEAK TO MARY and Mary has some topics, this will be the menu title.
  speak_to_menu_title:function(char) {
    return "Поговорить с " + lang.getName(char, {article:DEFINITE}) + " о:";
  },
  // If the player does TELL MARY ABOUT HOUSE this will appear before the response.
  tell_about_intro:function(char, text1, text2) {
    return "{nv:char:tell:true} " + lang.getName(char, {article:DEFINITE}) + " " + text2 + " " + text1 + ".";
  },
  // If the player does ASK MARY ABOUT HOUSE this will appear before the response.
  ask_about_intro:function(char, text1, text2) {
    return "{nv:char:ask:true} " + lang.getName(char, {article:DEFINITE}) + " " + text2 + " " + text1 + ".";
  },
  // If the player does TALK TO MARY ABOUT HOUSE this will appear before the response.
  talk_about_intro:function(char, text1, text2) {
    return "{nv:char:talk:true} с " + lang.getName(char, {article:DEFINITE}) + " " + text2 + " " + text1 + ".";
  },



  
  // Use when the NPC leaves a room; will give a message if the player can observe it
  npc_leaving_msg:function(npc, exit) {
    let flag = npc.inSight(exit.origin, 'moving', w[exit.name])
    if (!flag) return
    const options = {room:exit.origin, npc:npc, dir:exit.dir, mod:flag}
    if (typeof exit.npcLeaveMsg === 'function') { return exit.npcLeaveMsg(options) }
    if (typeof exit.npcLeaveMsg === 'string') { return msg(exit.npcLeaveMsg, options) }
    let s = typeof flag === 'string' ? flag + " {nv:npc:leave}" : "{nv:npc:leave:true}"
    s += " {nm:room:the}, направляясь {show:dir}."
    msg(s, options)
  },

  // the NPC has already been moved, so npc.loc is the destination
  npc_entering_msg:function(npc, exit) {
    const loc = w[exit.name]
    if (!loc) return errormsg('Не нахожу локацию "' + exit.name + '" при перемещении NPC.')
      
    let flag = npc.inSight(loc, 'moving', exit.origin)
    if (!flag) return
    const options = {room:loc, npc:npc, dir:exit.reverseNice(), mod:flag}
    if (typeof exit.npcEnterMsg === 'function') { return exit.npcEnterMsg(options) }
    if (typeof exit.npcEnterMsg === 'string') { return msg(exit.npcEnterMsg, options) }
    let s = typeof flag === 'string' ? flag + " {nv:npc:enter}" : "{nv:npc:enter:true}"
    s += " в {nm:room:the} со стороны {show:dir}."
    msg(s, options)
  },
  
  
  npc_enter_up_stairs:"{nv:npc:come:true} вверх по #.",
  npc_leave_up_stairs:"{nv:npc:go:true} вверх по #.",
  npc_enter_down_stairs:"{nv:npc:come:true} вниз по #.",
  npc_leave_down_stairs:"{nv:npc:go:true} вниз по #.",
  npc_enter_climb_up:"{nv:npc:climb:true} вверх по #.",
  npc_leave_climb_up:"{nv:npc:climb:true} вверх по #.",
  npc_enter_climb_down:"{nv:npc:climb:true} вниз по #.",
  npc_leave_climb_down:"{nv:npc:climb:true} вниз по #.",
  

  //----------------------------------------------------------------------------------------------
  // Meta-command responses


  // Save/load messages

  sl_dir_headings:['Файл', 'Игра', 'Вер', 'Время', 'Комментарий'],
  sl_dir_msg:"«Вер» — версия игры на момент сохранения. Загрузка сохранения из другой версии может не сработать. Удалить файл: DEL. Общие инструкции: SAVE.",
  sl_no_filename:"Сохранение без имени файла.",
  sl_saved:"Сохранено «{filename}» {if:toFile:в файл:в LocalStorage}.",
  sl_already_exists:"Файл уже есть. Чтобы перезаписать: SAVE [имя] OVERWRITE или SAVE [имя] OW.",
  sl_file_not_found:"Загрузка не удалась: файл не найден.",
  sl_deleted:"Удалено.",
  sl_file_loaded:"Загружен файл «{filename}»",
  sl_bad_format:"Неверный формат файла. Похоже, это для игры «{show:title}»?",


  // Achievements
  
  ach_none_yet:"Пока нет достижений (и возможно, их вовсе нет)!",
  ach_list_intro:"Получено {if:count:1:это достижение:эти достижения}!",
  ach_list_item:"{show:text} ({date:date})",
  ach_got_one:"Достижение: {show:ach:alias}",
  ach_got_one_with_details:"Достижение!|{show:ach:alias} — {show:ach:afterDetails}",
  ach_explain:"ACH ALL — все, ACH OUT — незакрытые, ACH COM — выполненные.",
  ach_none:"Достижений нет; может, сначала их нужно заработать?",
  ach_no_out:"Незакрытых достижений нет — всё сделано.",
  ach_no_com:"Выполненных достижений нет — всё впереди (или их просто нет).",



  spoken_on:"Режим озвучки включён. INTRO — вступление вслух.",
  spoken_off:"Режим озвучки выключен.",
  mode_brief:"Режим brief: без описаний комнат (кроме LOOK).",
  mode_terse:"Режим terse: описание комнаты только при первом входе и по LOOK.",
  mode_verbose:"Режим verbose: описание комнаты при каждом входе.",
  mode_silent_on:"Тихий режим включён.",
  mode_silent_off:"Тихий режим выключен.",
  transcript_on:"Транскрипт включён.",
  transcript_off:"Транскрипт выключен.",
  transcript_cleared:"Транскрипт очищен.",
  transcript_none:"Показать нечего — запись пуста.",
  transcript_already_on:"Транскрипт уже включён.",
  transcript_already_off:"Транскрипт уже выключен.",
  transcript_finish:"Смотреть транскрипт: {cmd:SCRIPT SHOW:здесь}.",
  finish_options:"Можно {cmd:UNFINISH:UNDO} последний ход или {cmd:RESTART:RESTART} (и загрузить сохранение).",
  new_tab_failed:"Не удалось открыть новую вкладку — скорее всего, браузер блокирует. Разреши во всплывающей панели и повтори команду.",
  undo_disabled:"В этой игре UNDO отключён.",
  undo_not_available:"Нет сохранений состояния для UNDO.",
  undo_done:"Отмена...",
  again_not_available:"Нет предыдущей команды для повтора.",
  scores_not_implemented:'В этой игре нет счёта.',
  restart_are_you_sure:'Точно начать заново? {b:[Y/N]}',
  restart_no:'Перезапуск отменён',
  yes_regex:/^(y|yes|д|да)$/i,
  

  disambigToCmd:"Не похоже на вариант из списка — похоже, это другая команда...?",
  helloScript:function() {
    metamsg("Привет!")
    metamsg("Если не знаешь, что делать — набери HELP: краткий гайд. Как раз сейчас...")
    metamsg(">HELP")
    wait()
    return lang.helpScript()
  },
  
  helpScript:function() {
    if (settings.textInput) {
      metamsg("Команды вводятся на английском. Примеры: TAKE — взять, EXAMINE или X — осмотреть, LOOK или L — осмотреться, GO NORTH или N — на север.");
      metamsg("Вводи команды в строке, чтобы взаимодействовать с миром.");      
      metamsg("{b:Перемещение:} восемь направлений компаса (или коротко {class:help-eg:N}, {class:help-eg:NE} и т.д.). При включённом Num Lock цифровая клавиатура тоже подходит. Минус и плюс — {class:help-eg:UP}/{class:help-eg:DOWN}, / и * — {class:help-eg:IN}/{class:help-eg:OUT}.");
      metamsg("{b:Другие команды:} {class:help-eg:LOOK} (или {class:help-eg:L}, или 5 на цифровой), {class:help-eg:HELP} (или {class:help-eg:?}), {class:help-eg:WAIT} (или {class:help-eg:Z}, или точка). Обычно команды вида {class:help-eg:GET HAT} или {class:help-eg:PUT THE BLUE TEAPOT IN THE ANCIENT CHEST}. Пробуй!");
      metamsg("{b:Предметы:} с некоторыми командами работают {class:help-eg:ALL} и {class:help-eg:ALL BUT}, например {class:help-eg:TAKE ALL} и {class:help-eg:PUT ALL BUT SWORD IN SACK}. Местоимения: {class:help-eg:LOOK AT MARY}, затем {class:help-eg:TALK TO HER}. Местоимение — к последнему подлежащему успешной команды: после {class:help-eg:PUT HAT AND FUNNY STICK IN THE DRAWER} «{class:help-eg:IT}» — это палка.");
      metamsg("{b:Персонажи:} можно приказать что-то сделать: {class:help-eg:MARY,PUT THE HAT IN THE BOX} или {class:help-eg:TELL MARY TO GET ALL BUT THE KNIFE}. Иногда доступны {class:help-eg:TALK TO}, {class:help-eg:ASK}/{class:help-eg:TELL} ... {class:help-eg:ABOUT}, или просто {class:help-eg:SAY}.");
      metamsg("{b:Мета:} {class:help-eg:ABOUT} — об авторе, {class:help-eg:SCRIPT} — о транскрипте, {class:help-eg:SAVE} — о сохранениях. {class:help-eg:WARNINGS} — предупреждения о содержании.")
      let s = "Ещё: {class:help-eg:BRIEF/TERSE/VERBOSE} — подробность описаний комнат. {class:help-eg:SILENT} — звук (если есть)."
      if (typeof map !== "undefined") s += " {class:help-eg:MAP} — карта."
      if (typeof imagePane !== "undefined") s += " {class:help-eg:IMAGES} — панель картинок."
      metamsg(s)
      metamsg("{b:Доступность:} {class:help-eg:DARK} — тёмная тема, {class:help-eg:SPOKEN} — озвучка текста. {class:help-eg:FONT} — простой шрифт. {class:help-eg:SCROLL} — автопрокрутка.")
      metamsg("{b:Мобильный:} {class:help-eg:NARROW} сужает текст; повтори ещё раз — ещё узже, третий раз — обратно.")
      metamsg("{b:Сокращения:} часто хватает первых букв имени — Quest догадывается. В комнате с Brian (мяч и коробка) {class:help-eg:B,PUT B IN B} может значить: Brian кладёт мяч в коробку.")
      metamsg("Стрелки вверх/вниз — предыдущие команды. Без стрелок: {class:help-eg:OOPS} — вернуть последнюю строку для правки. {class:help-eg:AGAIN} или {class:help-eg:G} — повторить.")
      if (settings.doubleClickWords) {
        metamsg("Двойной щелчок по слову добавляет его в строку ввода — просто ускорение набора, не подсказка игры.")
      }
      metamsg("Подробнее: {link:здесь:https://github.com/ThePix/QuestJS/wiki/How-To-Play} (откроется во вкладке).")      
    }
    if (settings.additionalHelp !== undefined) {
      for (const s of settings.additionalHelp) metamsg(s)
    }
    return world.SUCCESS_NO_TURNSCRIPTS
  },

  hintScript:function() {
    metamsg("Подсказок нет.")
    return world.SUCCESS_NO_TURNSCRIPTS
  },

  aboutScript:function() {
    metamsg("{i:{show:settings:title} версия {show:settings:version}} — автор {show:settings:author}, движок QuestJS (Quest 6) {show:settings:questVersion}.", {settings:settings})
    if (settings.ifdb) metamsg("IFDB: " + settings.ifdb)
    if (settings.thanks && settings.thanks.length > 0) {
      metamsg("{i:Благодарности:} " + formatList(settings.thanks, {lastSep:lang.list_and}) + ".")
    }
    if (settings.additionalAbout !== undefined) {
      for (const key in settings.additionalAbout) metamsg('{i:' + key + ':} ' + settings.additionalAbout[key])
    }
    if (settings.ifid) metamsg("{i:IFID:} " + settings.ifid)
    return world.SUCCESS_NO_TURNSCRIPTS
  },

  warningsScript:function() {
    switch (typeof settings.warnings) {
      case 'undefined' : metamsg('Для этой игры предупреждения не заданы.'); break;
      case 'string' : metamsg(settings.warnings); break;
      default: for (const el of settings.warnings) metamsg(el)
    }
    return world.SUCCESS_NO_TURNSCRIPTS;
  },

  saveLoadScript:function() {
    if (!settings.localStorageDisabled) {
      metamsg("В QuestJS два способа сохранить прогресс — LocalStorage или файл.")

      metamsg("{b:LocalStorage}")
      metamsg("LocalStorage — область браузера на компьютере; так проще всего.")
      metamsg("Если очистить данные браузера (или настроено автоочищение при закрытии), сохранения пропадут. Есть лимит объёма — большая игра может не влезть.")
      metamsg("Сохранить: {class:help-eg:SAVE [имя]}. По умолчанию нельзя сохранить поверх того же имени. Перезапись: {class:help-eg:SAVE [имя] OVERWRITE} или {class:help-eg:SAVE [имя] OW}.");
      metamsg("Загрузить: обнови страницу, затем {class:help-eg:LOAD [имя]}.");
      metamsg("Список: {class:help-eg:DIR} или {class:help-eg:LS}. Удалить: {class:help-eg:DELETE [имя]} или {class:help-eg:DEL [имя]}.")

      metamsg("{b:Файл}")
      metamsg("Можно сохранить в файл на диске — чуть хлопотнее, зато надёжнее.")
    }
    metamsg("В файл: {class:help-eg:FSAVE [имя]}. Файл попадёт в папку загрузок. Если имя занято, браузер часто добавит номер.");
    metamsg("Загрузить: обнови страницу, {class:help-eg:FLOAD} — диалог выбора файла.")
    metamsg("Список и удаление файловых сохранений — через проводник ОС.")

    return world.SUCCESS_NO_TURNSCRIPTS;
  },


  hintSheet:'Лист подсказок',
  hintSheetIntro:"Читай вопросы, пока не найдётся место, где возникла проблема. Чтобы расшифровать подсказку, подставь числам слова из «словаря» внизу. <i>Вернуться в игру — на её вкладку.</i>",
  linkHintInvisiClues:"Подсказки: {link:эта страница:" + folder + "/hints.html} в виде InvisiClues — без лишних спойлеров. Откроется во вкладке.",


  transcriptScript:function() {
    metamsg("Команды TRANSCRIPT или SCRIPT управляют записью ввода и вывода. Полезно при тестировании: видно, что произошло и как к этому пришли.")
    metamsg("SCRIPT ON — включить, SCRIPT OFF — выключить. SCRIPT CLEAR — очистить. SCRIPT START — очистить и сразу включить.")
    metamsg("SCRIPT SHOW — показать в новой вкладке; прогресс в игре не теряется. Некоторые браузеры (особенно Firefox) блокируют вкладку — разреши в баннере сверху и повтори команду.")
    metamsg("Комментарий в транскрипт: начало с {code:*} или {code:;} — Quest запишет и проигнорирует как команду.")
    metamsg("Всё хранится в LocalStorage между сессиями. В конце игры ввод может исчезнуть, но при записи останется ссылка на транскрипт.");
    metamsg("Сейчас транскрипт: " + (io.transcript ? 'вкл.' : 'выкл.'))
    return world.SUCCESS_NO_TURNSCRIPTS;
  },
  
  transcriptTitle:function() {
    let html = ''
    html += '<h2>Транскрипт QuestJS — «'
    html += settings.title + '» (версия ' + settings.version
    html += ')</h2>'
    html += '<p><a onclick="document.download()" style="cursor:pointer;border:black solid 1px;border-radius:5px;background:silver;line-height:1em">Скачать</a> как «transcript.html» в папку загрузок.</p>'
    html += '<hr/>'
    return html
  },
  transcriptStart:function() {
    const now = new Date()
    return '<p><i>Транскрипт начат в ' + now.toLocaleTimeString() + ', ' + now.toDateString() + '</i></p>'
  },
  transcriptEnd:function() {
    const now = new Date()
    return '<p><i>Транскрипт завершён в ' + now.toLocaleTimeString() + ', ' + now.toDateString() + '</i></p>'
  },
  

  topicsScript:function() {
    metamsg("TOPICS FOR [имя] — список тем для разговора (если есть в этой игре).");
    return world.SUCCESS_NO_TURNSCRIPTS;
  },
  
  betaTestIntro:function() {
    metamsg("Бета-версия (" + settings.version + "); браузер: " + navigator.userAgent)
    if (settings.textInput) {
      metamsg("Транскрипт пишется автоматически. В конце — Ctrl-Enter или SCRIPT SHOW (новая вкладка), либо ссылка в финале; сохрани (кнопка сверху) и приложи к письму. Или скопируй в письмо.")
      metamsg("Комментарии в транскрипт: команда с * в начале.")
    }
    else {    
      metamsg("Транскрипт пишется автоматически. Без текстового ввода открой инструменты разработчика (F12), вкладка «Console». Введи <code>saveLoad.transcriptShow()</code> и Enter — транскрипт во вкладке.")
      metamsg("Комментарии: скопируй <code>c(\"test comment\")</code> в консоль. Стрелки вверх/вниз — по истории ввода. В комментариях нельзя использовать двойные кавычки.")
    }
    metamsg("До продолжения игры стоит проверить, что транскрипт действительно открывается.")
    metamsg("ВАЖНО: транскрипты и сохранения в LocalStorage; если браузер чистит данные при закрытии — прогресс пропадёт!")
    saveLoad.transcriptStart()
  },
  
  game_over_html:'<p>И<br/>Г<br/>Р<br/>А<br/>/<br/>О<br/>К<br/>О<br/>Н<br/>Ч<br/>Е<br/>Н<br/>А</p>',




  //----------------------------------------------------------------------------------------------
  //  Language Data

  // Misc

  list_and:"и",
  list_nothing:"ничего",
  list_or:"или",
  list_nowhere:"нигде",
  never_mind:"Неважно.",
  default_description:"Просто декорация.",
  click_to_continue:"Нажми, чтобы продолжить...",
  buy:"Купить",
  buy_headings:["Предмет", "Цена", ""],
  current_money:"Деньги",
  inside:"внутри",
  on_top:"сверху",
  carrying:"при себе",


  command_split_regex:/\.| then |, then |,then |, and then |,and then | затем /i,
  article_filter_regex:/^(?:the |an |a )?(.+)$/,
  joiner_regex:/\band\b|\, ?and\b|\bи\b|\, ?и\b|\,/,
  all_regex:/^(all|everything)$/,
  all_exclude_regex:/^((all|everything) (but|bar|except)\b)/,
  go_pre_regex:"go to |goto |go |head |",

  yesNo:['Да', 'Нет'],
  tp_false:'ложь',
  tp_true:'истина',


  // Use this to stop commands getting saved to the walkthrough - note the space at the end
  noWalkthroughRegex:/^(script|transcript) /,


  //----------------------------------------------------------------------------------------------
  // Language constructs

  pronouns:{
    firstperson: {subjective:"я",    objective:"меня",   possPro: "моё",   possAdj: "мой",    reflexive:"себя",     handleAs:'me',   parserObjective:'me'},
    secondperson:{subjective:"ты",  objective:"тебя",  possPro: "твоё",  possAdj: "твой",  reflexive:"себя",   handleAs:'you',  parserObjective:'you'},
    thirdperson: {subjective:"оно",   objective:"его",   possPro: "его",    possAdj: "его",   reflexive:"себя",     handleAs:'it',   parserObjective:"it"},
    one:         {subjective:"некто",  objective:"некого",  possPro: "чьё-то",  possAdj: "чей-то", reflexive:"себя",     handleAs:'it',   parserObjective:"one"},
    massnoun:    {subjective:"оно",   objective:"его",   possPro: "его",    possAdj: "его",   reflexive:"себя",     handleAs:'it',   parserObjective:"it"},
    plural:      {subjective:"они", objective:"их", possPro: "их", possAdj: "их", reflexive:"себя", handleAs:'they', parserObjective:"them"},
    
    male:        {subjective:"он",   objective:"его",  possPro: "его",    possAdj: "его",   reflexive:"себя",    handleAs:'it',   parserObjective:"him"},
    female:      {subjective:"она",  objective:"её",  possPro: "её",   possAdj: "её",   reflexive:"себя",    handleAs:'it',   parserObjective:"her"},
    nonbinary:   {subjective:"они", objective:"их", possPro: "их", possAdj: "их", reflexive:"себя",   handleAs:'they', parserObjective:"them"},
    neNem:       {subjective:"ne",   objective:"nem",  possPro: "nirs",   possAdj: "nir",   reflexive:"nemself",    handleAs:'it'},
    veVer:       {subjective:"ve",   objective:"ver",  possPro: "vis",    possAdj: "vis",   reflexive:"verself",    handleAs:'it'},
    spivak:      {subjective:"ey",   objective:"em",   possPro: "eirs",   possAdj: "eir",   reflexive:"emself",     handleAs:'it'},
    xeXem:       {subjective:"xe",   objective:"xem",  possPro: "xyrs",   possAdj: "xyr",   reflexive:"xemself",    handleAs:'it'},
    perPer:      {subjective:"per",  objective:"per",  possPro: "pers",   possAdj: "pers",  reflexive:"perself",    handleAs:'it'},
    zeHir:       {subjective:"ze",   objective:"hir",  possPro: "hirs",   possAdj: "hir",   reflexive:"hirself",    handleAs:'it'},
    zheZhir:     {subjective:"zhe",  objective:"zhim", possPro: "zhers",  possAdj: "zher",  reflexive:"zhimself",   handleAs:'it'},
    zeZir:       {subjective:"ze",   objective:"zir",  possPro: "zirs",   possAdj: "zir",   reflexive:"zirself",    handleAs:'it'},
    zeZem:       {subjective:"ze",   objective:"zem",  possPro: "zes",    possAdj: "zes",   reflexive:"zemirself",  handleAs:'it'},
    faeFaer:     {subjective:"fae",  objective:"fae",  possPro: "faers",  possAdj: "faer",  reflexive:"faerself",   handleAs:'it'},
    aeAer:       {subjective:"ae",   objective:"ae",   possPro: "aers",   possAdj: "aer",   reflexive:"aerself",    handleAs:'it'},
  },

// There are a lot of non-binay prooun sets, and this is just a selection
// Sources:
// https://en.wikipedia.org/wiki/Gender_neutrality_in_languages_with_gendered_third-person_pronouns
// https://uwm.edu/lgbtrc/support/gender-pronouns/



  // Display verbs used in the side panel (name = UI label, action = English parser cmd)
  verbs:{
    examine:{ name:"Осмотреть", action:"examine" },
    use:{ name:"Использовать", action:"use" },
    take:{ name:"Взять", action:"take" },
    drop:{ name:"Бросить", action:"drop" },
    open:{ name:"Открыть", action:"open" },
    close:{ name:"Закрыть", action:"close" },
    switchon:{ name:"Включить", action:"switch on" },
    switchoff:{ name:"Выключить", action:"switch off" },
    wear:{ name:"Надеть", action:"wear" },
    remove:{ name:"Снять", action:"remove" },
    lookat:{ name:"Посмотреть", action:"look at" },
    talkto:{ name:"Говорить", action:"talk to" },
    eat:{ name:"Съесть", action:"eat" },
    drink:{ name:"Выпить", action:"drink" },
    read:{ name:"Прочитать", action:"read" },
    push:{ name:"Толкнуть", action:"push" },
    equip:{ name:"Экипировать", action:"equip" },
    unequip:{ name:"Снять", action:"unequip" },
    attack:{ name:"Атаковать", action:"attack" },
    sitOn:{ name:"Сесть", action:"sit on" },
    standOn:{ name:"Встать", action:"stand on" },
    reclineOn:{ name:"Лечь", action:"lie on" },
    getOff:{ name:"Слезть", action:"get off" },
    fill:{ name:"Наполнить", action:"fill" },
    empty:{ name:"Опустошить", action:"empty" },
    turn:{ name:"Повернуть", action:"turn" },
    search:{ name:"Обыскать", action:"search" },
  },
  
  // Flag the state of an item in a list
  invModifiers:{
    worn:"надето",
    open:"открыто",
    equipped:"экипировано",
    dead:"без признаков жизни",
  },


  // Change the abbrev values to suit your game (or language)
  // You may want to do that in settings, which is loaded first
  exit_list:[
    {name:'northwest', abbrev:'NW', niceDir:"на северо-запад", type:'compass', key:103, x:-1 ,y:1, z:0, opp:'southeast', symbol:'fa-arrow-left', rotate:45}, 
    {name:'north', abbrev:'N', niceDir:"на север", type:'compass', key:104, x:0 ,y:1, z:0, opp:'south', symbol:'fa-arrow-up'}, 
    {name:'northeast', abbrev:'NE', niceDir:"на северо-восток", type:'compass', key:105, x:1 ,y:1, z:0, opp:'southwest', symbol:'fa-arrow-up', rotate:45}, 
    {name:'in', abbrev:'In', alt:'enter', niceDir:"внутрь", type:'inout', key:111, opp:'out', symbol:'fa-sign-in-alt'}, 
    {name:'up', alt:'ascend', abbrev:'U', niceDir:"вверх", type:'vertical', key:109, x:0 ,y:0, z:1, opp:'down', symbol:'fa-arrow-up'},
    
    {name:'west', abbrev:'W', niceDir:"на запад", type:'compass', key:100, x:-1 ,y:0, z:0, opp:'east', symbol:'fa-arrow-left'}, 
    {name:'Look', abbrev:'L', type:'nocmd', key:101, symbol:'fa-eye'}, 
    {name:'east', abbrev:'E', niceDir:"на восток", type:'compass', key:102, x:1 ,y:0, z:0, opp:'west', symbol:'fa-arrow-right'}, 
    {name:'out', abbrev:'Out', alt:'exit|o|leave', niceDir:"наружу", type:'inout', key:106,opp:'in', symbol:'fa-sign-out-alt'}, 
    {name:'down', abbrev:'Dn', alt:'d|descend', niceDir:"вниз", type:'vertical', key:107, x:0 ,y:0, z:-1, opp:'up', symbol:'fa-arrow-down'}, 

    {name:'southwest', abbrev:'SW', niceDir:"на юго-запад", type:'compass', key:97, x:-1 ,y:-1, z:0, opp:'northeast', symbol:'fa-arrow-down', rotate:45}, 
    {name:'south', abbrev:'S', niceDir:"на юг", type:'compass', key:98, x:0 ,y:-1, z:0, opp:'north', symbol:'fa-arrow-down'}, 
    {name:'southeast', abbrev:'SE', niceDir:"на юго-восток", type:'compass', key:99, x:1 ,y:-1, z:0, opp:'northwest', symbol:'fa-arrow-right', rotate:45}, 
    {name:'Wait', abbrev:'Z', type:'nocmd', key:110, symbol:'fa-clock'}, 
    {name:'Help', abbrev:'?', type:'nocmd', symbol:'fa-info'},

    {name:'climb_up', alt:'climb up', abbrev:'Cl', niceDir:"вверх", type:'vertical', x:0 ,y:0, z:1, opp:'down', not_that_way:'Здесь не на что залезть.'},
    {name:'climb_down', alt:'climb down', abbrev:'CD', niceDir:"вниз", type:'vertical', x:0 ,y:0, z:-1, opp:'up', not_that_way:'Здесь некуда спускаться.'},
  ],

  numberUnits:"ноль;один;два;три;четыре;пять;шесть;семь;восемь;девять;десять;одиннадцать;двенадцать;тринадцать;четырнадцать;пятнадцать;шестнадцать;семнадцать;восемнадцать;девятнадцать;двадцать".split(";"),
  numberTens:"двадцать;тридцать;сорок;пятьдесят;шестьдесят;семьдесят;восемьдесят;девяносто".split(";"),
  parserNumberUnits:"zero;one;two;three;four;five;six;seven;eight;nine;ten;eleven;twelve;thirteen;fourteen;fifteen;sixteen;seventeen;eighteen;nineteen;twenty".split(";"),

  numberScales:[
    null,
    ["тысяча", "тысячи", "тысяч"],
    ["миллион", "миллиона", "миллионов"],
    ["миллиард", "миллиарда", "миллиардов"],
    ["триллион", "триллиона", "триллионов"],
    ["квадриллион", "квадриллиона", "квадриллионов"],
    ["квинтиллион", "квинтиллиона", "квинтиллионов"],
  ],

  ordinalWords:{
    "ноль":"нулевой", "один":"первый", "одна":"первая", "два":"второй", "две":"вторая",
    "три":"третий", "четыре":"четвёртый", "пять":"пятый", "шесть":"шестой",
    "семь":"седьмой", "восемь":"восьмой", "девять":"девятый", "десять":"десятый",
    "одиннадцать":"одиннадцатый", "двенадцать":"двенадцатый", "тринадцать":"тринадцатый",
    "четырнадцать":"четырнадцатый", "пятнадцать":"пятнадцатый", "шестнадцать":"шестнадцатый",
    "семнадцать":"семнадцатый", "восемнадцать":"восемнадцатый", "девятнадцать":"девятнадцатый",
    "двадцать":"двадцатый", "тридцать":"тридцатый", "сорок":"сороковой",
    "пятьдесят":"пятидесятый", "шестьдесят":"шестидесятый", "семьдесят":"семидесятый",
    "восемьдесят":"восьмидесятый", "девяносто":"девяностый", "сто":"сотый",
    "двести":"двухсотый", "триста":"трёхсотый", "четыреста":"четырёхсотый",
    "пятьсот":"пятисотый", "шестьсот":"шестисотый", "семьсот":"семисотый",
    "восемьсот":"восьмисотый", "девятьсот":"девятисотый", "тысяча":"тысячный",
    "тысячи":"тысячный", "тысяч":"тысячный", "миллион":"миллионный",
    "миллиона":"миллионный", "миллионов":"миллионный",
  },


  conjugations:{
    me:[
      { name:"be", value:""},
      { name:"'be", value:""},
      { name:"were", value:"был"},
      { name:"take", value:"беру"},
      { name:"drop", value:"бросаю"},
      { name:"have", value:"имею"},
      { name:"can't", value:"не могу"},
      { name:"don't", value:"не"},
      { name:"'ve", value:"уже"},
      { name:"put", value:"кладу"},
      { name:"open", value:"открываю"},
      { name:"close", value:"закрываю"},
      { name:"eat", value:"ем"},
      { name:"drink", value:"пью"},
      { name:"sit", value:"сажусь"},
      { name:"stand", value:"встаю"},
      { name:"lie", value:"ложусь"},
      { name:"switch", value:"переключаю"},
      { name:"fill", value:"наполняю"},
      { name:"empty", value:"опустошаю"},
      { name:"try", value:"пытаюсь"},
      { name:"head", value:"иду"},
      { name:"look", value:"смотрю"},
      { name:"think", value:"думаю"},
      { name:"can", value:"могу"},
      { name:"will", value:"буду"},
      { name:"say", value:"говорю"},
      { name:"ask", value:"спрашиваю"},
      { name:"tell", value:"рассказываю"},
      { name:"talk", value:"говорю"},
      { name:"chat", value:"болтаю"},
      { name:"nod", value:"киваю"},
      { name:"buy", value:"покупаю"},
      { name:"sell", value:"продаю"},
      { name:"build", value:"собираю"},
      { name:"need", value:"нуждаюсь"},
      { name:"get", value:"слезаю"},
      { name:"leave", value:"ухожу"},
      { name:"enter", value:"вхожу"},
      { name:"come", value:"прихожу"},
      { name:"go", value:"иду"},
      { name:"climb", value:"лезу"},
      { name:"press", value:"нажимаю"},
      { name:"push", value:"толкаю"},
      { name:"pull", value:"тяну"},
      { name:"attach", value:"привязываю"},
      { name:"detach", value:"отвязываю"},
      { name:"wind", value:"сматываю"},
      { name:"unwind", value:"разматываюсь"},
      { name:"unlock", value:"отпираю"},
      { name:"lock", value:"запираю"},
      { name:"want", value:"хочу"},
      { name:"feel", value:"чувствую"},
      { name:"suspect", value:"подозреваю"},
      { name:"do", value:"делаю"},
      { name:"cannot", value:"не могу"},
      { name:"pray", value:"молюсь"},
      { name:"sing", value:"пою"},
      { name:"dance", value:"танцую"},
      { name:"jump", value:"прыгаю"},
      { name:"whistle", value:"свищу"},
      { name:"wear", value:"надеваю"},
    ],
    you:[
      { name:"be", value:""},
      { name:"'be", value:""},
      { name:"were", value:"был"},
      { name:"take", value:"берёшь"},
      { name:"drop", value:"бросаешь"},
      { name:"have", value:"имеешь"},
      { name:"can't", value:"не можешь"},
      { name:"don't", value:"не"},
      { name:"'ve", value:"уже"},
      { name:"put", value:"кладёшь"},
      { name:"open", value:"открываешь"},
      { name:"close", value:"закрываешь"},
      { name:"eat", value:"ешь"},
      { name:"drink", value:"пьёшь"},
      { name:"sit", value:"садишься"},
      { name:"stand", value:"встаёшь"},
      { name:"lie", value:"ложишься"},
      { name:"switch", value:"переключаешь"},
      { name:"fill", value:"наполняешь"},
      { name:"empty", value:"опустошаешь"},
      { name:"try", value:"пытаешься"},
      { name:"head", value:"направляешься"},
      { name:"look", value:"смотришь"},
      { name:"think", value:"думаешь"},
      { name:"can", value:"можешь"},
      { name:"will", value:"будешь"},
      { name:"say", value:"говоришь"},
      { name:"ask", value:"спрашиваешь"},
      { name:"tell", value:"рассказываешь"},
      { name:"talk", value:"говоришь"},
      { name:"chat", value:"болтаешь"},
      { name:"nod", value:"киваешь"},
      { name:"buy", value:"покупаешь"},
      { name:"sell", value:"продаёшь"},
      { name:"build", value:"собираешь"},
      { name:"need", value:"нужно"},
      { name:"get", value:"слезаешь"},
      { name:"leave", value:"уходишь"},
      { name:"enter", value:"входишь"},
      { name:"come", value:"приходишь"},
      { name:"go", value:"идёшь"},
      { name:"climb", value:"лезешь"},
      { name:"press", value:"нажимаешь"},
      { name:"push", value:"толкаешь"},
      { name:"pull", value:"тянешь"},
      { name:"attach", value:"привязываешь"},
      { name:"detach", value:"отвязываешь"},
      { name:"wind", value:"сматываешь"},
      { name:"unwind", value:"разматывается"},
      { name:"unlock", value:"отпираешь"},
      { name:"lock", value:"запираешь"},
      { name:"want", value:"хочешь"},
      { name:"feel", value:"чувствуешь"},
      { name:"suspect", value:"подозреваешь"},
      { name:"do", value:"делаешь"},
      { name:"cannot", value:"не можешь"},
      { name:"pray", value:"молишься"},
      { name:"sing", value:"поёшь"},
      { name:"dance", value:"танцуешь"},
      { name:"jump", value:"прыгаешь"},
      { name:"whistle", value:"свистишь"},
      { name:"wear", value:"надеваешь"},
    ],
    they:[
      { name:"be", value:""},
      { name:"'be", value:""},
      { name:"were", value:"были"},
      { name:"take", value:"берут"},
      { name:"drop", value:"бросают"},
      { name:"have", value:"имеют"},
      { name:"can't", value:"не могут"},
      { name:"don't", value:"не"},
      { name:"'ve", value:"уже"},
      { name:"put", value:"кладут"},
      { name:"open", value:"открывают"},
      { name:"close", value:"закрывают"},
      { name:"eat", value:"едят"},
      { name:"drink", value:"пьют"},
      { name:"sit", value:"садятся"},
      { name:"stand", value:"встают"},
      { name:"lie", value:"ложатся"},
      { name:"switch", value:"переключают"},
      { name:"fill", value:"наполняют"},
      { name:"empty", value:"опустошают"},
      { name:"try", value:"пытаются"},
      { name:"head", value:"направляются"},
      { name:"look", value:"смотрят"},
      { name:"think", value:"думают"},
      { name:"can", value:"могут"},
      { name:"will", value:"будут"},
      { name:"say", value:"говорят"},
      { name:"ask", value:"спрашивают"},
      { name:"tell", value:"рассказывают"},
      { name:"talk", value:"говорят"},
      { name:"chat", value:"болтают"},
      { name:"nod", value:"кивают"},
      { name:"buy", value:"покупают"},
      { name:"sell", value:"продают"},
      { name:"build", value:"собирают"},
      { name:"need", value:"нуждаются"},
      { name:"get", value:"слезают"},
      { name:"leave", value:"уходят"},
      { name:"enter", value:"входят"},
      { name:"come", value:"приходят"},
      { name:"go", value:"идут"},
      { name:"climb", value:"лезут"},
      { name:"press", value:"нажимают"},
      { name:"push", value:"толкают"},
      { name:"pull", value:"тянут"},
      { name:"attach", value:"привязывают"},
      { name:"detach", value:"отвязывают"},
      { name:"wind", value:"сматывают"},
      { name:"unwind", value:"разматывается"},
      { name:"unlock", value:"отпирают"},
      { name:"lock", value:"запирают"},
      { name:"want", value:"хотят"},
      { name:"feel", value:"чувствуют"},
      { name:"suspect", value:"подозревают"},
      { name:"do", value:"делают"},
      { name:"cannot", value:"не могут"},
      { name:"pray", value:"молятся"},
      { name:"sing", value:"поют"},
      { name:"dance", value:"танцуют"},
      { name:"jump", value:"прыгают"},
      { name:"whistle", value:"свистят"},
      { name:"wear", value:"надевают"},
    ],
    it:[
      { name:"be", value:""},
      { name:"were", value:"был"},
      { name:"have", value:"имеет"},
      { name:"can", value:"может"},
      { name:"will", value:"будет"},
      { name:"don't", value:"не"},
      { name:"can't", value:"не может"},
      { name:"won't", value:"не будет"},
      { name:"cannot", value:"не может"},
      { name:"'ve", value:"уже"},
      { name:"'be", value:""},
      { name:"'ll", value:"будет"},
      { name:"take", value:"берёт"},
      { name:"drop", value:"бросает"},
      { name:"put", value:"кладёт"},
      { name:"open", value:"открывает"},
      { name:"close", value:"закрывает"},
      { name:"eat", value:"ест"},
      { name:"drink", value:"пьёт"},
      { name:"sit", value:"садится"},
      { name:"stand", value:"встаёт"},
      { name:"lie", value:"ложится"},
      { name:"switch", value:"переключает"},
      { name:"fill", value:"наполняет"},
      { name:"empty", value:"опустошает"},
      { name:"try", value:"пытается"},
      { name:"head", value:"направляется"},
      { name:"look", value:"смотрит"},
      { name:"think", value:"думает"},
      { name:"say", value:"говорит"},
      { name:"ask", value:"спрашивает"},
      { name:"tell", value:"рассказывает"},
      { name:"talk", value:"говорит"},
      { name:"chat", value:"болтает"},
      { name:"nod", value:"кивает"},
      { name:"buy", value:"покупает"},
      { name:"sell", value:"продаёт"},
      { name:"build", value:"собирает"},
      { name:"need", value:"нуждается"},
      { name:"get", value:"слезает"},
      { name:"leave", value:"уходит"},
      { name:"enter", value:"входит"},
      { name:"come", value:"приходит"},
      { name:"go", value:"идёт"},
      { name:"climb", value:"лезет"},
      { name:"press", value:"нажимает"},
      { name:"push", value:"толкает"},
      { name:"pull", value:"тянет"},
      { name:"attach", value:"привязывает"},
      { name:"detach", value:"отвязывает"},
      { name:"wind", value:"сматывает"},
      { name:"unwind", value:"разматывается"},
      { name:"unlock", value:"отпирает"},
      { name:"lock", value:"запирает"},
      { name:"want", value:"хочет"},
      { name:"feel", value:"чувствует"},
      { name:"suspect", value:"подозревает"},
      { name:"do", value:"делает"},
      { name:"pray", value:"молится"},
      { name:"sing", value:"поёт"},
      { name:"dance", value:"танцует"},
      { name:"jump", value:"прыгает"},
      { name:"whistle", value:"свистит"},
      { name:"wear", value:"надевает"},
    ],
  },

  contentsForData:{
    surface:{prefix:'сверху: ', suffix:''},
    container:{prefix:'внутри: ', suffix:''},
  },

  ui: {
    LOOK: "Осмотреться",
    MAP: "Развернуть карту",
    MAP_CLOSE: "Свернуть карту",
    SAVE: "Сохранить / загрузить",
    SETTINGS: "Настройки",
    INV: "Инвентарь",
    WAIT: "Ждать",
    AGAIN: "Повторить команду",
    CLOSE: "Закрыть",
    CANCEL: "Отмена",
    APPLY: "Применить",
    LOAD_LIST: "Список сохранений",
    MEDIA_CLOSE: "Закрыть медиа",
    SCROLL_PREV: "Прокрутить назад",
    SCROLL_NEXT: "Прокрутить вперёд",
    COMMANDS_HIDE: "Скрыть команды",
    COMMANDS_SHOW: "Показать команды",
    PANE_CHARACTER: "Персонаж",
    PANE_WORLD: "Мир",
    PANE_GAME: "Лог",
    TAB_BIO: "Персонаж",
    TAB_STATUS: "Статус",
    TAB_DEBUG: "Отладка",
    TAB_HELD: "Инвентарь",
    TAB_WORN: "Надето",
    SLOT_HELD: "Инвентарь",
    SLOT_WORN: "Надето",
    SLOT_HERE: "Здесь",
    LOCATION: "Место",
    COMMANDS: "Команды",
    SMART_CONTEXT: "Контекст",
    SMART_DEBUG: "Отладка",
    EMPTY_STATUS: "Нет статуса",
    EMPTY_ACTIONS: "Нет действий",
    EMPTY_VERBS: "Нет глаголов",
    EMPTY_NOUNS: "Нет объектов",
    EMPTY_TARGETS: "Нет целей",
    MEDIA: "Медиа",
    DEBUG_ACTIONS: "Действия",
    DEBUG_FIELDS: "Поля",
    DEBUG_LOCATION: "Локация",
    QUICK_LOOK: "Осмотр",
    QUICK_INV: "Инвентарь",
    QUICK_WAIT: "Ждать",
    QUICK_AGAIN: "Снова",
    BTN_SAVE: "Сохранить",
    BTN_CANCEL: "Отмена",
    BTN_CLOSE: "Закрыть",
    BTN_APPLY: "Применить",
    BTN_LOAD_LIST: "Список",
    DIALOG_SAVE: "Сохранение",
    DIALOG_NAME: "Имя",
    DIALOG_SETTINGS: "Настройки",
    DIALOG_TEXT_SIZE: "Размер текста",
    DIALOG_SIZE_SMALL: "Мелкий",
    DIALOG_SIZE_MEDIUM: "Средний",
    DIALOG_SIZE_LARGE: "Крупный",
    DIALOG_THEME: "Тема",
    DIALOG_THEME_DARK: "Тёмная",
    DIALOG_THEME_LIGHT: "Светлая",
  },
  //----------------------------------------------------------------------------------------------
  //                                   LANGUAGE FUNCTIONS

//@DOC
// ## Language Functions
//@UNDOC


  //@DOC
  // Returns "" in Russian (no articles), unless defArticle / possessives apply.
  addDefiniteArticle:function(item, options) {
    return lang.addArticle(item, DEFINITE, options)
  },

  //@DOC
  // Returns "" in Russian (no articles), unless indefArticle / possessives apply.
  addIndefiniteArticle:function(item, options) {
    return lang.addArticle(item, INDEFINITE, options)
  },

  addArticle:function(item, type, options = {}){
    if (type === 'the') type = DEFINITE
    if (type === 'a') type = INDEFINITE
    if (!type || (type !== DEFINITE && type !== INDEFINITE)) return
    
    // owned, so handle differently
    // test if player exists yet in case this is used during item creation
    if (player && item.owner === player.name) return player.pronouns.possAdj + " "
    if (typeof options.possAdj === 'string') {
      if (!w[options.possAdj]) {
        throw "Ой... нужен притяжательный в lang.addArticle (из lang.getName или formatList), но не найден " + options.possAdj + "."
      }
      options.possAdj = w[options.possAdj]
    }
    if (options.possAdj === true) {
      options.possAdj = item.owner ? w[item.owner] : undefined
    }
    if (item.owner && options.possAdj && options.possAdj === w[item.owner]) {
      return options.possAdj.pronouns.possAdj + " "
    }
    // If ignorePossessive is true, just skip this
    // If it is 'noLink', 
    if (item.owner && options.ignorePossessive !== true) {
      const suboptions = {
        possessive:true,
        noLink:options.ignorePossessive === 'noLink'
      }
      return lang.getName(w[item.owner], suboptions) + " "
    }

    // Russian has no articles
    if (type === DEFINITE) {
      if (item.defArticle) return item.defArticle + " "
      return ""
    }

    if (item.indefArticle) return item.indefArticle + " "
    if (item.properNoun) return ""
    return ""
  },

  getName:function(item, options) {
    if (!options) options = {}
    const alias = item.alias ? item.alias : item.name
    let s = ''
    // The count needs to be an item specific attribute because there could be several items in a list
    // and we need to be clear which item the count belongs to
    let count = options[item.name + '_count'] ? options[item.name + '_count'] : false
    // Or we can set count_this to an attribute, and use that to get the number
    // processText("Mandy watches as {nv:item:grow:false:count_this}.", {item:w.grown_tamarind_tree, count_this:'seedsPlanted'})
    if (options.count_this) count = item[options.count_this]
    // Or use suppressCount if we do not want the number, but do want it plural when it should
    if (!count && options.suppressCount) count = item[options.suppressCount]

    // Or if this is a countable, and loc is set, get the count from that location
    if (!count && options.loc && item.countable) count = item.countAtLoc(options.loc)
    
    if (item.getDisplayName) {
      options.count = count
      s = item.getDisplayName(options)
    }

    else if (item.pronouns === lang.pronouns.firstperson || item.pronouns === lang.pronouns.secondperson) {
      s = options.possessive ? item.pronouns.possAdj : item.pronouns.subjective;
    }

    else {
      if (count === 'infinity') {
        s += item.infinity ? item.infinity + ' ' : 'много '
      }
      else if (options.article === DEFINITE && options.suppressCount) {
        s += lang.addDefiniteArticle(item)
      }
      else if (!options.suppressCount && count && count > 1) {
        s += lang.toWords(count) + ' '
      }
      else if (options.article === DEFINITE) {
        s += lang.addDefiniteArticle(item, options)
      }
      else if (options.article === INDEFINITE) {
        s += lang.addIndefiniteArticle(item, options)
      }
      else if (options.article === COUNT) {
        s += 'один '
      }
      if (item.getAdjective) {
        s += item.getAdjective()
      }
      if (!count || count === 1) {
        s += (options.enhanced && item.enhancedAlias ? item.enhancedAlias : alias)
      }
      else {
        s += item.pluralAlias
      }
      // Russian: no 's possessive suffix (YAGNI)
      if (options.possessive) {
        s += ""
      }
    }
    if (options.capital) s = sentenceCase(s)
    if (settings.nameTransformer) s = settings.nameTransformer(s, item, options)
    s += util.getNameModifiers(item, options)
    return s
  },


  //@DOC
  // Returns the given integer in Russian words.
  toWordsMax:1000000000000000000,

  _pluralIndex:function(number) {
    const n = Math.abs(number) % 100
    const last = n % 10
    if (n >= 11 && n <= 14) return 2
    if (last === 1) return 0
    if (last >= 2 && last <= 4) return 1
    return 2
  },

  _toWords1000:function(number, feminine = false) {
    number = Number(number)
    if (!Number.isInteger(number) || number < 0 || number > 999) {
      return errormsg("_toWords1000 принимает целое число от 0 до 999")
    }
    if (number === 0) return lang.numberUnits[0]

    const result = []
    const hundredsWords = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"]
    const hundreds = Math.floor(number / 100)
    if (hundreds) result.push(hundredsWords[hundreds])

    const rest = number % 100
    if (rest === 0) return result.join(" ")
    if (rest < 20) {
      if (feminine && rest === 1) result.push("одна")
      else if (feminine && rest === 2) result.push("две")
      else result.push(lang.numberUnits[rest])
      return result.join(" ")
    }

    const tens = Math.floor(rest / 10)
    const units = rest % 10
    result.push(lang.numberTens[tens - 2])
    if (units) {
      if (feminine && units === 1) result.push("одна")
      else if (feminine && units === 2) result.push("две")
      else result.push(lang.numberUnits[units])
    }
    return result.join(" ")
  },

  toWords:function(number, noun) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
      return errormsg("toWords принимает только конечные числа")
    }
    number = Math.round(number)
    if (number === 0) {
      const zero = lang.numberUnits[0]
      return noun ? zero + " " + lang.getPlural(noun, 0) : zero
    }

    const negative = number < 0
    let remaining = Math.abs(number)
    const original = remaining
    const parts = []
    let scale = 0

    while (remaining > 0) {
      const chunk = remaining % 1000
      if (chunk) {
        let words = lang._toWords1000(chunk, scale === 1)
        if (scale > 0) {
          const forms = lang.numberScales[scale]
          if (!forms) return Math.abs(number).toString()
          words += " " + forms[lang._pluralIndex(chunk)]
        }
        parts.unshift(words)
      }
      remaining = Math.floor(remaining / 1000)
      scale++
    }

    let result = parts.join(" ")
    if (negative) result = "минус " + result
    if (!noun) return result
    return result + " " + lang.getPlural(noun, original)
  },

  //@DOC
  // Returns a year as Russian words; negative values use the BCE suffix.
  toYear:function(number) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
      errormsg("toYear принимает только конечные числа")
      return number
    }
    number = Math.round(number)
    if (number < 0) return lang.toWords(-number) + " до н. э."
    return lang.toWords(number)
  },

  //@DOC
  // Returns the given integer as a masculine ordinal.
  toOrdinal:function(number) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
      errormsg("toOrdinal принимает только конечные числа")
      return number
    }
    number = Math.round(number)
    const negative = number < 0
    const absolute = Math.abs(number)
    const exactOrdinals = {
      1000:"тысячный",
      2000:"двухтысячный",
      3000:"трёхтысячный",
      4000:"четырёхтысячный",
      5000:"пятитысячный",
      1000000:"миллионный",
    }
    if (exactOrdinals[absolute]) return (negative ? "минус " : "") + exactOrdinals[absolute]
    let words = lang.toWords(absolute)
    const parts = words.split(" ")
    const last = parts.pop()
    parts.push(lang.ordinalWords[last] || last + "-й")
    words = parts.join(" ")
    if (absolute >= 1000) words = words.replace(/^одна тысяча /, "тысяча ")
    return negative ? "минус " + words : words
  },

  // Player input remains English even though number output is Russian.
  convertNumbers:function(s) {
    for (let i = 0; i < lang.parserNumberUnits.length; i++) {
      const regex = new RegExp("\\b" + lang.parserNumberUnits[i] + "\\b", "gi")
      s = s.replace(regex, String(i))
    }
    return s
  },

  // Supports a plain noun, [one, few, many], or "one|few|many".
  getPlural:function(noun, number = 2) {
    const forms = Array.isArray(noun)
      ? noun
      : (typeof noun === "string" && noun.includes("|") ? noun.split("|") : null)
    if (!forms) return noun
    return forms[lang._pluralIndex(number)] || forms[forms.length - 1]
  },


  // Conjugating




  //@DOC
  // Returns the verb properly conjugated for the item.
  conjugate:function(item, verb, options = {}) {
    const arr = lang.conjugations[item.pronouns.handleAs]

    if (!arr) {
      errormsg("Нет спряжений: conjugations_" + item.pronouns.handleAs)
      return verb;
    }
    for (let conj of arr) {
      if (conj.name === verb) {
        return conj.value;
      }
    }
    
    for (let conj of arr) {
      const name = conj.name;
      const value = conj.value;
      if (name.startsWith("@") && verb.endsWith(name.substring(1))) {
        return lang.conjugate (item, verb.substring(0, verb.length - name.length + 1)) + value;
      }
      else if (name.startsWith("*") && verb.endsWith(name.substring(1))) {
        return verb.substring(0, verb.length - name.length + 1) + value;
      }
    }
    return options.capitalise ? sentenceCase(verb) : verb
  },



  //@DOC
  // Returns the pronoun for the item, followed by the conjugated verb.
  pronounVerb:function(item, verb, options = {}) {
    let s = (item.pronouns.subjective + " " + lang.conjugate(item, verb)).trim();
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  pronounVerbForGroup:function(item, verb, options = {}) {
    let s = (item.groupPronouns().subjective + " " + lang.conjugate(item.group(), verb)).trim();
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  verbPronoun:function(item, verb, options = {}) {
    let s = (lang.conjugate(item, verb) + " " + item.pronouns.subjective).trim();
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  //@DOC
  // Returns the name for the item, followed by the conjugated verb.
  nounVerb:function(item, verb, options = {}) {
    if (item === player && !player.useproperNoun) {
      return lang.pronounVerb(item, verb, options);
    }
    if (options.article === undefined) options.article = DEFINITE
    let s = (lang.getName(item, options) + " " + lang.conjugate(item, verb)).trim();
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  verbNoun:function(item, verb, options = {}) {
    if (item === player) {
      return lang.pronounVerb(item, verb, options);
    }
    if (options.article === undefined) options.article = DEFINITE
    let s = (lang.conjugate(item, verb) + " " + lang.getName(item, options)).trim();
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

}




lang.applyUi = function() {
  settings.dateTime.locale = "ru-RU"
  if (settings.noTalkTo === "TALK TO is not a feature in this game.") {
    settings.noTalkTo = "В этой игре нет команды TALK TO."
  }
  if (settings.noAskTell === "ASK/TELL ABOUT is not a feature in this game.") {
    settings.noAskTell = "В этой игре нет ASK/TELL ABOUT."
  }
  const tpl = settings.roomTemplate && settings.roomTemplate.join("\n")
  if (tpl && tpl.includes("You can see")) {
    settings.roomTemplate = [
      "#{cap:{hereName}}",
      "{terse:{hereDesc}}",
      "{objectsHere:Здесь можно увидеть {objects}.}",
      "{exitsHere:Можно пойти {exits}.}",
      "{ifNot:settings:playMode:play:{ifExists:currentLocation:todo:{class:todo:{show:currentLocation:todo}}}}",
    ]
  }
}
lang.applyUi()

// Output pronouns are Russian, while parser pronouns remain English.
lang.applyParserPronouns = function(item) {
  if (!item || item.parserPronouns || !item.pronouns) return
  item.parserPronouns = {
    objective:item.pronouns.parserObjective || item.pronouns.objective,
  }
}

const previousItemCreateFunc = settings.itemCreateFunc
settings.itemCreateFunc = function(item) {
  if (typeof previousItemCreateFunc === "function") previousItemCreateFunc.call(this, item)
  lang.applyParserPronouns(item)
}

const previousRoomCreateFunc = settings.roomCreateFunc
settings.roomCreateFunc = function(item) {
  if (typeof previousRoomCreateFunc === "function") previousRoomCreateFunc.call(this, item)
  lang.applyParserPronouns(item)
}


lang.createVerb = function(name, options = {}) {
  if (options.words === undefined) options.words = name.toLowerCase()
  if (options.ing === undefined) options.ing = name + 'ing'
  if (options.defmsg === undefined) options.defmsg = options.ing + " {nm:item:the} вряд ли к чему-то приведёт."
  if (options.defmsg === true) options.defmsg = "{nm:item:the:true} — не то, с чем так обращаются."
  new Cmd(name, {
    regex:new RegExp("^(?:" + options.words + ") (.+)$"),
    objects:[
      {scope:options.held ? parser.isHeld : parser.isHere},
    ],
    npcCmd:true,
    defmsg:options.defmsg
  })
}



lang.createVerbWith = function(name, options = {}) {
  if (options.words === undefined) options.words = name.toLowerCase()
  if (options.ing === undefined) options.ing = name + 'ing'
  if (options.defmsg === undefined) options.defmsg = options.ing + " {nm:item:the} вряд ли к чему-то приведёт."
  if (options.defmsg === true) options.defmsg = "{nm:item:the:true} — не то, с чем так обращаются."
  new Cmd(name + "With", {
    regexes:[
      new RegExp("^(?:" + options.words + ") (.+) (?:using|with) (.+)$"),
      { regex:new RegExp("^(?:use|with|using) (.+) to (?:" + options.words + ") (.+)$"), mod:{reverse:true}},
      { regex:new RegExp("^(?:use|with|using) (.+) (?:" + options.words + ") (.+)$"), mod:{reverse:true}},
    ],
    objects:[
      {scope:options.held ? parser.isHeld : parser.isHere},
      {scope:parser.isHeld},
    ],
    attName:name.toLowerCase(),
    npcCmd:true,
    withScript:true,
    defmsg:options.defmsg
  })
}





lang.questions = [
  { q:'who am i', script:function() { parser.parse('look me'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'who are (?:u|you)', script:function() { metamsg('Я? Парсер. Пытаюсь понять твои команды, а герой — выполнить их в мире игры.'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'who is (?:|the )(?:player|protagonist)', script:function() { metamsg('Протагонист — персонаж мира, особый: им управляешь ты напрямую. Это твоё «я» в игре; узнать, какой он — WHO AM I?.'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'what am i', script:function() { parser.parse('look me'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'what (?:(?:have i got|do i have)(?:| on me| with me)|am i (?:carry|hold)ing)', script:function() { parser.parse('inv'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'where am i', script:function() { parser.parse('look'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'what do i do', script:function() { parser.parse('help'); return world.SUCCESS_NO_TURNSCRIPTS }},
  { q:'(?:what do i do now|where do i go)', script:function() { parser.parse('hint'); return world.SUCCESS_NO_TURNSCRIPTS }},
]






// Used by the editor
try { util; }
catch (e) {
  module.exports = { lang:lang }
}
