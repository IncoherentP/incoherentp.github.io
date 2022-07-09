function randnum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let placeName;

const rootSingleOnsets = ['b','c','d','f','g','h','j','l','m','n','o','p','qu','r','s','t','v','w','x','y','z','ch','sh','th'];

const rootLClusterOnsets = ['bl','cl','fl','gl','pl','sl','spl'];

const rootRClusterOnsets = ['br','cr','dr','fr','gr','pr','tr','wr','shr','spr','str','scr','thr'];

const rootSClusterOnsets = ['sc','sm','sn','sp','squ','st','sw'];

