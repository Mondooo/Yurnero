var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = '1FPFPxoJqNDppDAPjjhK-vqbV_9RW8PG4v2CGQik';
qiniu.conf.SECRET_KEY = 'Tyf8i4rDuhIFa1-D8u7MU4OXe1YErSlUHXfQN-xc';

// 测试域名
var testHost = 'ocktrl9no.bkt.clouddn.com';

// 构建私有空间的链接
var getUrl = function(key) {
    // 拼接基础url
    url = 'http://'+testHost+'/' + key;

    // 设置链接过期时间, 默认为3600s
    var policy = new qiniu.rs.GetPolicy(3600);

    // 生成下载链接
    return policy.makeRequest(url);
};

module.exports.getUrl = getUrl;
