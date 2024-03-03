function randnum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let placeName;

const rootSingleOnsets = ['b','c','d','f','g','h','j','l','m','n','p','qu','r','s','t','v','w','x','y','z','ch','sh','th'];

const rootLClusterOnsets = ['bl','cl','fl','gl','pl','sl','spl'];

const rootRClusterOnsets = ['br','cr','dr','fr','gr','pr','tr','wr','shr','spr','str','scr','thr'];

const rootSClusterOnsets = ['sc','sm','sn','sp','squ','st','sw'];

const onsets = [...rootSingleOnsets, ...rootLClusterOnsets, ...rootRClusterOnsets. ...rootSClusterOnsets];

const rootVowels = ['a','e','i','o','u','y'];

const rootDiphthongs = ['ay','ey','oy','aw','ew','ow'];

const nuclei = [...rootVowels, ...rootDiphthongs];

const rootSingleCodae = ['b','k','d','f','g','l','m','n','p','qu','r','s','t','v','w','z','ch','sh','th'];

const rootGeminateCodae = ['bb','ck','dd','ff','gg','dg','ll','mm','nn','pp','cqu','rr','ss','tt','x','tch']; //yes dg is the geminate of j. shut up

const rootLClusterCodae = ['lb','lc','ld','lf','lg','lk','lm','ln','lp','lqu','ls','lt','lv','lx','lz'];

const rootRClusterCodae = ['rb','rc','rd','rf','rg','rk','rm','rn','rp','rqu','rs','rt','rv','rx','rz'];