// TedsTalk 文章資料
// 新增一篇 = 在陣列「最前面」加一個物件即可。
// cover 可用 covers/ 內的 svg；body 用 HTML 段落。
window.POSTS = [
  {
    id: "008",
    date: "2026-07-22",
    tag: "超能力",
    cover: "covers/008.svg",
    title: "數據不會騙人，人會",
    hook: "書報攤那張密封的樂透明牌，可能是全世界賣最好的一份「數據分析報告」。",
    body: `
<p>你有沒有想過，書報攤那種密封信封裝的大樂透明牌，為什麼有人願意花 100 塊去買？或者股市老師那種訂閱服務，為什麼有人心甘情願每個月付錢，然後乖乖照著老師說的價格買進？這些都是「數據分析報告」——大概是全世界最沒用、卻賣得最好的那種。為什麼賣得好？因為它抓住了人心裡最底層的東西：<strong>貪</strong>。你想發財，而這份報告給你一個明確的號碼、一支明確的股票、一個明確的價格，你只要照做，而且你以為很快就會有結果。想要，所以你願意付錢。這裡藏著一個很重要的道理：<strong>數據不會騙人，人會</strong>。開獎號碼的統計、股價的線圖，數字本身沒有騙你；真正在騙你的，是那個把數字包裝成「照做就會贏」的人。所以學數據分析，你要學兩件事：看懂數字本身，還要看穿是誰在解讀這些數字、他為什麼要你這樣相信。</p>

<p>那什麼才是一份「有價值」的數據分析？我自己的判斷標準很現實：<strong>它可以被執行、結果可以被預期（哪怕要冒點風險）、它真的會帶來結果，而且——最關鍵的一點——有人願意為它付錢</strong>。一份分析如果沒人根據它去做事、也沒人願意為它掏錢，那它頂多是個半成品，還稱不上真正有價值。這聽起來有點功利，但這就是現實世界檢驗分析好壞的方式：沒人要用的分析，再漂亮也只是自我滿足。</p>

<p>那要怎麼做出這種有用的分析？大多數時候，起點不是打開電腦跑報表，而是<strong>先在生活裡看到一個現象，然後把它變成一個商業假設</strong>。比如你走在路上，發現外勞好像越來越多——這干你什麼事？先別急著回答，往下追幾個問題：這個現象背後，有沒有一個還沒被滿足的需求？如果有，可以用什麼商業行動去接住它，比如讓外勞買基金、開一個理財工具給他們？接下來才是真正的分析工作：這個假設是不是真的——人數到底有沒有變多、變多多少，得去找數據驗證，不能只憑感覺；如果假設成立，這個生意可以有多大——這群人有多少、其中有多少比例會買、平均一個人願意投入多少，把這幾個數字乘起來，就是一個粗略但夠用的市場規模；最後別忘了成本那一面——要接觸到這群人、說服他們、服務他們，得花多少行銷、多少人力、多少時間，這些成本估不出來，前面市場算得再大也只是紙上富貴。</p>

<p>最後一件事一定要記住：<strong>一份好的數據分析，一定要跟商業行動、商業生態綁在一起</strong>，不能是關在報表裡自己看得爽的東西。它要能接得上「有人會因此做什麼決定」這條線，不然分析做得再精美，也只是一堆好看的圖表。</p>

<p>數據分析是一種超能力，因為它能幫你從一個路邊隨手的觀察，一路推到「這值不值得做」的答案。但也正因為它是超能力，一樣可以被拿去騙人——差別只在，用的人心裡有沒有那把尺。</p>
`
  },
  {
    id: "007",
    date: "2026-07-22",
    tag: "超能力",
    cover: "covers/007.svg",
    title: "別讓學校、考試、或「這個又不會考」把你的好奇心關掉",
    hook: "第二個超能力：思考的技術——把「為什麼」當成一種樂趣。",
    locked: true,
    enc: "ljwFdz8gymlXAzYvdsa1Iw==.ShByhPybhkQ4Ekzj.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",
  },
  {
    id: "006",
    date: "2026-07-22",
    tag: "超能力",
    cover: "covers/006.svg",
    title: "第一個超能力：觀察力——別人在看，你在看見",
    hook: "同樣一個人、一個房間，觀察力強的人看到的，是別人的五倍。",
    body: `
<p>大部分人一輩子都在「看」，卻很少人真的「看見」。這就是為什麼我把<strong>觀察力</strong>放在超能力系列的第一個——它不用天賦、不用花錢，人人都能練，但練會的人，能看到別人看不到的東西。</p>

<p>你知道福爾摩斯不是憑空想出來的嗎？他的原型是一個真人：十九世紀愛丁堡大學的外科醫生 Joseph Bell。1877 年，一個叫柯南道爾的醫學生當他的助手，親眼看著這位醫生光憑觀察，就說出一個素未謀面的病人做什麼工作、最近去過哪裡、得了什麼病。柯南道爾後來寫信給他：「我之所以能寫出福爾摩斯，完全要歸功於你。」Bell 的本事不是魔法——別人看到「一個病人」，他看到的是手上的繭、鞋底的泥、說話的口音、走路的姿勢。同一個人，他就是看見得比別人多。</p>

<p>「看」和「看見」差在哪？我們每天走同一條路，卻說不出路邊有幾家店、換了哪塊招牌。眼睛有開，但沒在看。觀察力，就是把「看過」升級成「看見」的能力。</p>

<p>為什麼它是超能力？因為觀察力好的人，讀得懂別人的情緒、更早發現機會和危險、學東西也更快，因為他們抓得到別人漏掉的關鍵細節。而它會怎麼一路長大，我用自己的故事講給你聽。</p>

<p>我小時候，因為看了某個忍者訓練的介紹，還聽聞有人可以「一目十行、過目不忘」，就自己常常練習一招，我叫它「<strong>眼睛快照</strong>」。我隨時出題給自己：立即閉上眼睛，問自己面前有幾個人、腦海中閉眼前的那張快照裡有哪些細節。我在南投的頂樓看大馬路上的車子，快速辨識它們是什麼牌子、什麼型號——例如福特天王星、裕隆速利 1.2……然後很驕傲地跟小叔公對答案。</p>

<p>後來，這個能力慢慢增加了一個功能，變成了<strong>換位思考</strong>：我把自己的靈魂套到某些人的背後，想這個人為什麼要這樣做、他下一步會怎麼做、可能有什麼反應，如果我是他，能不能做得更好。這個「把靈魂套到別人背後」的能力，讓我在理解高層老闆或客戶的時候特別有用——常常在他們還沒說出口、或語言表達不清晰的時候，我就能猜到他們背後真正在意的價值，讓我有機會及早應對、想出解決他們問題的對策。</p>

<p>接著又長出另一種延伸功能，叫做<strong>模仿</strong>：你給我一份簡報，我模仿的是簡報的「論述」，而不只是簡報的文字；我甚至可以還原簡報者製作簡報時的糾結、他想表達什麼——而我不只能做到如此，還能做得比原來的簡報者更好。</p>

<p>這一切都來自於：<strong>觀察、收集資訊，而且非常細微地問自己</strong>——他為什麼要做這一步？一定有什麼因素影響了他的決策。如果我是他，我這樣解決會更好嗎？我是不是漏了什麼？他是不是漏了什麼？</p>

<p>我做了 N 次各式各樣的練習，我把這種無聊的練習，總歸叫做「觀察力」。我會幫自己出題、驗證練習的成果：Y 次的企劃、Z 次的決策與承受結果……可能是在第 X 次的時候，我擁有了這個頂尖的能力。X 是多少，我不記得了，但我很確定——<strong>絕對不是上班之後才練得到的。</strong></p>

<p>所以別小看這種「無聊的練習」。觀察力不用花一毛錢、也不用天分，只要你願意開始給自己出題、把眼睛真正打開。這是你能練成的第一個超能力——而且越早開始，複利越大。</p>
`
  },
  {
    id: "005",
    date: "2026-07-22",
    tag: "應變",
    cover: "covers/005.svg",
    title: "罩子放亮點：冷靜的人才有得選",
    hook: "先看見的人，永遠多一點反應的餘裕。",
    body: `
<p>我常跟家人說一句話：「罩子放亮點。」有時走在路上，遠遠看到一個怪怪的人往這邊過來，我會提醒大家留意、保持距離。這不是疑神疑鬼，而是一種習慣——<strong>先看見，你才有得選</strong>。沒看見的人，只能被事情推著走；先看見的人，永遠多一點反應的餘裕。</p>

<p>所以第一件事很簡單：走路別一直低頭滑手機，把頭抬起來，<strong>眼觀四面、耳聽八方</strong>。危險是留給沒在看的人，機會也是。你觀察得越多，世界給你的選項就越多。</p>

<p>看見之後怎麼應變？分享一個很好用的框架，叫「OODA 循環」，是美國空軍上校 John Boyd 從戰鬥機空戰裡歸納出來的：<strong>觀察 → 判斷 → 決策 → 行動</strong>，然後再回到觀察，不斷循環。遇到狀況，先冷靜觀察、傾聽、必要時快速上網查資料；再結合經驗判斷這是什麼情況；然後快速選一條路、動手做；做完看結果，再修正。誰的循環轉得又快又準，誰就佔上風。這是飛行員用命換來的道理，拿來處理生活大小事、考試、衝突，一樣好用。</p>

<p>不過這個循環有個天敵——<strong>情緒</strong>。心理學家 Daniel Goleman 提過一個概念叫「杏仁核劫持」：當你非常焦急或憤怒，大腦裡負責情緒的部分會瞬間壓過負責理性的部分，讓你在還沒想清楚前就衝動反應，事後往往後悔。</p>

<p>所以如果這篇你只記得一件事，我希望是這一個動作：<strong>情緒一上來，先停 6 秒。</strong>當你發現自己很急、很怒、很想立刻回嗆或衝動下決定——先什麼都別做。閉上嘴，深呼吸，在心裡慢慢數到六。這 6 秒不是迷信：讓杏仁核發動的那股衝動化學物質，需要一點時間才會退去，而短短幾秒，就足夠讓你理性的大腦重新上線。等這 6 秒過了，再回頭觀察、收集資訊、好好決定。</p>

<p>把它練成你的反射動作：<strong>先停 6 秒 → 深呼吸 → 再反應</strong>。一句話、三個步驟，越簡單，你在慌亂的當下越用得出來。你會發現，人生中大部分讓你後悔的話和決定，都是在那沒忍住的前 6 秒做的——光是守住這 6 秒，你就能避開九成的麻煩。這個動作，值得你練一輩子。</p>

<p>其實兩千年前的斯多葛派哲學也講同一件事：<strong>把力氣放在你能控制的，放掉你控制不了的</strong>。別人的態度、已經發生的事，你管不了；但你的觀察、你的反應、你的下一步，完全是你的。能分清這兩者的人，遇到亂流最穩。</p>

<p>冷靜從來不是天生膽大，而是一套可以練的流程：<strong>抬頭看、先觀察、情緒上來先停 6 秒、冷靜了再決策</strong>。練久了你會發現，當別人慌成一團，你還能從容應變——這在任何時代，都是一種很強的能力。</p>
`
  },
  {
    id: "004",
    date: "2026-07-22",
    tag: "金錢",
    cover: "covers/004.svg",
    title: "用錢的智慧",
    hook: "會賺錢的人很多，會用錢的人才真的自由。",
    body: `
<p>會賺錢的人很多，會用錢的人才真的自由。我們從小被教怎麼考試、怎麼找工作，卻很少有人好好教「錢到手之後該怎麼辦」。這篇想聊的，就是這件學校不教、卻會跟著你一輩子的功夫。</p>

<p>第一條，也是最重要的一條：<strong>量入為出</strong>。你花的，不要超過你手上真正能運用的——不管那是零用錢、打工賺的、獎學金，還是過年的紅包。很多人一輩子栽在這四個字上：東西還沒到手，錢就先被想要的東西、被分期和刷卡預支光了。先算清楚自己現在能動用多少，再決定花多少，你就已經贏過很多人。</p>

<p>第二，記住一句老話：<strong>由儉入奢易，由奢入儉難</strong>。生活水準往上調很爽、很快，往下砍卻很痛。習慣了每天手搖、習慣了想買就買，之後要縮回去，比戒糖還難。與其賺多少花多少，不如刻意讓生活維持在「比你能負擔的再簡單一點」，你會多出很多餘裕和選擇。</p>

<p>第三，省錢不是美德，<strong>當用則用、當省則省</strong>才是。一味挑最便宜的，常常反而更貴——省了便宜工具的錢，卻賠上時間和品質。真正的智慧是分清楚：該花的地方別小氣（健康、學習、能讓你變強的工具和體驗），可有可無的地方別手軟。把錢花在會長大的東西上，那不是花費，是投資。</p>

<p>第四，一定要有一筆<strong>「不動的錢」</strong>。人生一定會有意外——生病、失業、臨時的大開銷。現在不留一點，真有急事時就只能借、只能求人。存錢不是為了小氣，是為了買一份「我不怕」的底氣。哪怕每個月只留一點點，養成習慣，未來的你會感謝現在的你。</p>

<p>還有一件事你要早點懂：<strong>父母會顧你的基本生活，多半也願意投資你的未來</strong>——念書、學一項真本事，這種錢他們通常花得甘願。但家不是提款機；而且父母的收入也會有起有落，也會有其他意外要應付。所以真正該練的，是<strong>把握你當下能運用的資源</strong>，不管多少，把它用在對的地方——存下來、拿去投資，或投資在自己的能力成長上。因為總有一天，養活自己、照顧別人的本事，得靠你自己長出來。</p>

<p>用錢的智慧，說到底就一句話：<strong>知道錢該往哪去</strong>。讓錢替你買到自由、替未來鋪路，而不是替一時的慾望買單。管得住錢的人，才真正管得住自己的人生。</p>
`
  },
  {
    id: "003",
    date: "2026-07-22",
    tag: "慾望",
    cover: "covers/003.svg",
    title: "把慾望變成你的引擎",
    hook: "慾望不是壞東西，看你把它綁在哪——綁在購物車，還是綁在你想成為的樣子。",
    body: `
<p>很多人一聽到「慾望」，直覺覺得是壞事，要壓抑、要戒掉。我不這麼看。慾望其實是人身上最強的一股能量——問題從來不是「有沒有慾望」，而是<strong>你把這股能量接到哪裡</strong>。接到購物車，它讓你不停買、不停空虛；接到你想成為的樣子，它就變成推你往前的引擎。</p>

<p>同樣是「我想要」，方向差很多。「我想要那雙限量球鞋」和「我想要有一天靠自己的能力買下它」，用的是同一股慾望，但一個把你變成消費者，一個把你變成創造者。而有時候，你要的東西根本沒有人能直接給你——這時候唯一的辦法，就是<strong>把慾望改寫成一個你能努力的目標</strong>。</p>

<p>講一個我自己的故事。大學畢業前夕，我心裡最大的慾望，其實是「不要去當兵」。我好羨慕一個同學因為扁平足就免役，也羨慕國中同學家境好、小時候就被送出國，根本不用煩惱這件事。但這個慾望，沒有任何人能幫我達成。我能做的，只有用盡全力，跟奶奶多要了一筆補習費，去走一條大家都覺得不可能的路——用傳統的講法叫「科舉」，說白了就是回到學習本身，靠實力替自己開一條路。這條路難走嗎？其實不難。難的是克服自己的心魔，還有同學看我的眼光。回頭看，我只是把我的二十四小時，重新分配到對的事情上而已。就這樣一個慾望、加上做法的轉變，讓我從谷底翻身，徹底改變了我的人生。</p>

<p>你也可以這樣。每次強烈想要什麼的時候，多問自己一句：這個慾望，能不能變成一個讓我變強的目標？想被看見，就把它變成「做出一個真的拿得出手的作品」；想有錢，就把它變成「搞懂一項別人願意付錢的能力」。慾望被你導向哪裡，你就往哪裡長。</p>

<p>但要提醒一件事：這股能量用錯地方，會反過來吃掉你——就是<strong>為了買更好的東西，反而被錢追著跑</strong>。買了新手機想配更好的殼，換了車想再換更大的，慾望像跑步機，你越追越累，卻永遠差一步。這時候要學會「返璞歸真」：分清楚什麼會真的讓你更好、什麼只是讓你「看起來」更好。前者值得投入，後者放掉也不可惜。</p>

<p>一個人自不自由，往往不看他擁有多少，而看他<strong>能不能決定自己的慾望要往哪去</strong>。讓慾望當引擎，帶你去真正想去的地方——而不是變成方向盤，把你載去一個其實不想到的地方。</p>
`
  },
  {
    id: "002",
    date: "2026-07-22",
    tag: "慾望",
    cover: "covers/002.svg",
    title: "越想要，越容易失望",
    hook: "失望，往往不是因為你缺什麼，而是想要的，比你有的多太多。",
    sign: "爸爸",
    body: `
<p>你有沒有過這種感覺：明明沒發生什麼壞事，卻莫名不開心、覺得自己什麼都不夠？爸爸年輕時也常這樣。後來才懂——<strong>失望，其實是「期待」減掉「現實」的那個差距</strong>。差距越大，你越失望。而讓差距變大的，常常不是現實太差，是我們的慾望，開得太大。</p>

<p>手機最會放大這件事。你滑到的，都是別人剪過的最好一面：新球鞋、出國、名牌、完美的一天。看久了，大腦會偷偷把那些當成「標準」，然後覺得自己好像少了什麼。可是那不是你的現實，那是別人的精選集。</p>

<p>所以第一個功夫，是<strong>分辨「需要」和「想要」</strong>。需要，是沒有它生活會出問題的東西——吃飯、健康、學習；想要，是有了會開心、但沒有你也活得好好的。這兩個很容易混在一起，因為慾望很會假裝成「我需要」。每次想買、想追一樣東西之前，先誠實問自己一句：這是需要，還是想要？光是能分清楚，你就贏過很多大人了。</p>

<p>第二個功夫更難，但更重要：<strong>誠實面對自己的現況</strong>。你現在有什麼、缺什麼、能力到哪，看清楚，不誇大、也不假裝。很多人的痛苦，不是因為擁有太少，而是不願承認自己現在站在哪裡，於是一直拿現實去對撞一個假的期待。承認現況不是認輸，剛好相反——你要先知道自己真正站在哪，才走得出下一步。</p>

<p>看懂慾望、認清現況，你不會比較少擁有，反而會活得比別人自由。爸爸開 BMW 的那段日子，其實不見得比開 Volvo 快樂；我到現在還很懷念以前騎野狼 125 上下班、載你媽出去玩路上出的那些糗事，也懷念有一次我跟你媽住的旅館，一晚才 30 塊美金、整間飄著農場牛糞味，我們卻笑到不行。那些快樂，跟東西貴不貴一點關係都沒有。所以爸爸一直提醒自己：<strong>量「入」為「出」，不勉強自己去追撐不起的慾望</strong>——能這樣的人，才是真正的自由。</p>
`
  },
  {
    id: "001",
    date: "2026-07-22",
    tag: "時間",
    cover: "covers/001.svg",
    title: "同樣 24 小時，為什麼有人變成大人物？",
    hook: "你今天把時間投在哪，十年後你就長成那個樣子——這不是雞湯，是複利。",
    sign: "爸爸",
    body: `
<p>先問你一個問題：一杯手搖飲 65 塊，你會考慮很久嗎？大概不會。但剛剛滑手機那 40 分鐘，其實比那杯飲料貴得多——你相信嗎？</p>

<p>這世界最公平的一件事，就是<strong>每個人一天都只有 24 小時</strong>。首富沒有比你多一秒，天才也一樣。差別只在——你把時間「投」進了哪裡。時間跟錢一樣，是拿來投資的。你長時間投入什麼，你就會慢慢長成那個領域的一部分。</p>

<p>《ONE PIECE》的作者尾田榮一郎，4 歲就知道「漫畫家」這種職業、決定以後要畫漫畫；國中立志要畫一部海賊漫畫、開始收集點子；高一那年，他退出足球社，把時間全部投進畫圖。愛看漫畫的孩子很多，但他把時間<strong>持續投進去</strong>，於是長成了整個漫畫產業的核心人物。</p>

<p>再看巴菲特。他 6 歲挨家挨戶賣口香糖和可樂，11 歲一邊送報、一邊買下人生第一張股票，還跟同學合資買彈珠台放在理髮店收錢。他不是天生會投資，而是從小把時間投在「怎麼讓錢長大」這件事上，於是長成了投資界的代表。</p>

<p>你不用等長大才開始。你這一代比我幸運太多——<strong>網路和 AI，讓你現在就能試</strong>。想懂一個產業，可以自己上網、問 AI，一週摸出門道。想試試做生意，網拍就是很好玩的起點：國外有個叫 Hayden 的孩子，小學就在網路上賣玩具，國中賣糖果、指尖陀螺，高中已經做到百萬營收；也有人放學後只花 30 分鐘打包出貨，一年就賺進一筆錢。他們厲害的不是本錢，而是<strong>敢把課本以外的時間，拿去真的動手試</strong>。</p>

<p>我不是要你每分鐘都拿去拚。休息、耍廢、跟朋友鬧，都很重要。我要你記住的是：課業之外，你還有很多小時可以投資。有意識地選一件你有興趣的事，持續投進去——時間會用複利，把它變成別人追不上的東西。這是爸爸想第一個告訴你的事。</p>
`
  }
];
