/*
Navicat MySQL Data Transfer

Source Server         : data
Source Server Version : 50013
Source Host           : localhost:3306
Source Database       : restaurant

Target Server Type    : MYSQL
Target Server Version : 50013
File Encoding         : 65001

Date: 2022-09-07 15:02:52
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `business`
-- ----------------------------
DROP TABLE IF EXISTS `business`;
CREATE TABLE `business` (
  `sjID` varchar(10) NOT NULL,
  `sjName` varchar(20) default NULL,
  `zizhi` varchar(200) default NULL,
  `otherZizhi` varchar(200) default NULL,
  `shangbiao` varchar(200) default NULL,
  `city` varchar(50) default NULL,
  `address` varchar(50) default NULL,
  `tel` varchar(11) default NULL,
  `name` varchar(20) default NULL,
  PRIMARY KEY  (`sjID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of business
-- ----------------------------
INSERT INTO `business` VALUES ('485', '刘氏客栈', 'https://img1.baidu.com/it/u=2403914886,2830667053&fm=253&app=53&size=w931&n=0&g=0n&f=jpeg&fmt=auto?sec=1662224400&t=9098130cdd3e3876567013f2b28e499f', 'https://img2.baidu.com/it/u=275199463,2654689315&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662224400&t=929dfea52d9b8c4d6fa44d594ebeaf33', 'https://img0.baidu.com/it/u=1319076497,887209156&fm=253&fmt=auto&app=138&f=JPEG?w=601&h=401', '浙江省杭州市', '西湖', '18155315236', '刘大仙');

-- ----------------------------
-- Table structure for `food`
-- ----------------------------
DROP TABLE IF EXISTS `food`;
CREATE TABLE `food` (
  `id` int(10) NOT NULL auto_increment,
  `imgUrl` varchar(500) default NULL,
  `foodname` varchar(20) default NULL,
  `foodprice` double(10,0) default NULL,
  `foodkind` varchar(20) default NULL,
  `kouwei` varchar(50) default NULL,
  `number` int(10) default NULL,
  `minnumber` int(10) default NULL,
  `maxnumber` int(10) default NULL,
  `zhuangtai` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food
-- ----------------------------
INSERT INTO `food` VALUES ('1', 'https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=1addfc138e04669186c91cf4acdcb7c4', '大盘鸡', '20', '饭食类', '微辣，五香', '20', '5', '50', '正常');
INSERT INTO `food` VALUES ('2', 'https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=1addfc138e04669186c91cf4acdcb7c4', '蛋炒饭', '20', '饭食类', '正常', '15', '5', '60', '异常');
INSERT INTO `food` VALUES ('3', 'https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=1addfc138e04669186c91cf4acdcb7c4', '金牌烤鱼', '188', '热菜', '蒜香，五香，微辣，中辣', '10', '3', '20', '正常');
INSERT INTO `food` VALUES ('4', 'https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=1addfc138e04669186c91cf4acdcb7c4', '凉拌黄瓜', '10', '小菜', '无', '20', '3', '50', '正常');
INSERT INTO `food` VALUES ('8', 'https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=1addfc138e04669186c91cf4acdcb7c4', '农家小炒肉', '50', '热菜', '微辣，中辣，特辣', '5', '1', '10', '正常');
INSERT INTO `food` VALUES ('9', 'https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662138000&t=1addfc138e04669186c91cf4acdcb7c4', 'aa', '16', '面食类', 'bu', '44', '11', '444', '1');

-- ----------------------------
-- Table structure for `material`
-- ----------------------------
DROP TABLE IF EXISTS `material`;
CREATE TABLE `material` (
  `id` int(10) NOT NULL auto_increment,
  `number` int(10) default NULL,
  `kucun` varchar(20) default NULL,
  `tlname` varchar(20) default NULL,
  `guige` varchar(20) default NULL,
  `leibie` varchar(20) default NULL,
  `minnumber` int(10) default NULL,
  `maxnumber` int(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of material
-- ----------------------------
INSERT INTO `material` VALUES ('1', '77', '袋', '鸡精', '20克/袋', '调味品', '10', '100');
INSERT INTO `material` VALUES ('2', '37', '袋', '味精', '20克/袋', '调味品', '10', '100');
INSERT INTO `material` VALUES ('4', '99', '袋', '可食用碘盐', '550克/袋', '调味品', '10', '100');
INSERT INTO `material` VALUES ('5', '37', '袋', '食盐', '20克/袋', '调味品', '10', '110');
INSERT INTO `material` VALUES ('7', '500', '袋', '谷氨酸钠', '20克/袋', '调味品', '100', '1000');
INSERT INTO `material` VALUES ('8', '37', '袋', '白砂糖', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('9', '37', '袋', '冰糖', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('10', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', '10', '1000');
INSERT INTO `material` VALUES ('11', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('12', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('13', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('14', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('15', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('16', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('17', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', null, null);
INSERT INTO `material` VALUES ('18', '37', '袋', '谷氨酸钠', '20克/袋', '调味品', '20', '456');
INSERT INTO `material` VALUES ('19', '100', '瓶', '醋', '500ml/瓶', '醋', '45', '524542');

-- ----------------------------
-- Table structure for `member`
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `hyID` int(10) NOT NULL auto_increment,
  `hyKind` varchar(20) default NULL,
  `hyName` varchar(20) default NULL,
  `hyZhekou` varchar(10) default NULL,
  `jifen` int(10) default NULL,
  `money` double(10,0) default NULL,
  `tel` varchar(11) default NULL,
  `xfCishu` int(10) default NULL,
  `xfMoney` double(10,0) default NULL,
  `store` varchar(10) default NULL,
  PRIMARY KEY  (`hyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('5', '会员', '张三4', '8.5', '3357', '6666', '13312341234', '0', '8888', '正常');
INSERT INTO `member` VALUES ('6', '会员', '张三4', '8.5', '3357', '6666', '13312341234', '20', '8888', '正常');
INSERT INTO `member` VALUES ('8', '普通会员', '李wuaaasssaa', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('9', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('10', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('11', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('12', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('13', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('14', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('15', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('16', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('17', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('18', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('19', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('20', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('21', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('22', '会员', '张三4', '8.5', '3357', '6666', '13312341234', '20', '8888', '');
INSERT INTO `member` VALUES ('23', '会员', '张三4', '8.5', '3357', '6666', '13312341234', '20', '8888', '');
INSERT INTO `member` VALUES ('24', '非会员', 'tomaaa', '8.5', '3357', '6666', '13312341234', '20', '8888', '正常');
INSERT INTO `member` VALUES ('25', '会员', 'tom', '8.5', '3357', '6666', '13312341234', '20', '8888', '');
INSERT INTO `member` VALUES ('26', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('27', '会员', '李四', '8.8', '456', '8598', '13312341235', '30', '5555', '正常');
INSERT INTO `member` VALUES ('28', '普通会员', 'aa', '1', '121', '131', '31313', '31', '13', '1');

-- ----------------------------
-- Table structure for `membercategory`
-- ----------------------------
DROP TABLE IF EXISTS `membercategory`;
CREATE TABLE `membercategory` (
  `id` int(10) NOT NULL auto_increment,
  `name` varchar(10) default NULL,
  `zhekou` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of membercategory
-- ----------------------------
INSERT INTO `membercategory` VALUES ('2', 'vip', '9.8');
INSERT INTO `membercategory` VALUES ('3', '黄金会员', null);
INSERT INTO `membercategory` VALUES ('4', '钻石会员', null);
INSERT INTO `membercategory` VALUES ('5', 'vvvvvvip', null);
INSERT INTO `membercategory` VALUES ('6', 'vip', '9.8');
INSERT INTO `membercategory` VALUES ('7', 'vip2.0', '8.8');
INSERT INTO `membercategory` VALUES ('8', 'sss', '8.8');

-- ----------------------------
-- Table structure for `promotion`
-- ----------------------------
DROP TABLE IF EXISTS `promotion`;
CREATE TABLE `promotion` (
  `id` int(10) NOT NULL auto_increment,
  `cxname` varchar(20) default NULL,
  `ksdate` date default NULL,
  `jsdate` date default NULL,
  `people` varchar(20) default NULL,
  `zddate` datetime default NULL,
  `zhuangtai` int(1) default NULL,
  `foodname` varchar(20) default NULL,
  `cxType` varchar(20) default NULL,
  `originPrice` double(10,0) default NULL,
  `discount` double(10,0) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of promotion
-- ----------------------------
INSERT INTO `promotion` VALUES ('1', '促销名称1', '2022-08-03', '2022-08-28', '张三', '2022-05-04 14:52:19', '0', '大盘鸡', '特价', '15', '12');
INSERT INTO `promotion` VALUES ('2', '促销名称2', '2022-09-01', '2022-09-24', '张三', '2022-08-01 14:53:16', '1', '螺蛳粉', '折扣', '20', '18');
INSERT INTO `promotion` VALUES ('5', '促销名称3', '2022-08-29', '2022-09-16', '小刘', '2022-09-03 11:05:00', '1', '黄焖鸡', '折扣', '20', '15');

-- ----------------------------
-- Table structure for `store`
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(10) NOT NULL auto_increment,
  `bianma` varchar(10) default NULL,
  `mdName` varchar(20) default NULL,
  `quyu` varchar(20) default NULL,
  `address` varchar(50) default NULL,
  `tel` varchar(11) default NULL,
  `date` datetime default NULL,
  `people` int(10) default NULL,
  `state` varchar(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES ('2', 'MD000330', '大刘饭馆', '北京', '北京天安门', '18161712262', '2022-09-02 22:37:00', '3', '1');
INSERT INTO `store` VALUES ('4', 'MD000330', '将瓜苗1', '杭州', '浙江', '18161712262', '2022-06-01 02:45:13', '3', '0');
INSERT INTO `store` VALUES ('5', 'MD000330', '将瓜苗', '杭州', '浙江', '18161712262', '2022-06-01 02:45:13', '3', '0');
INSERT INTO `store` VALUES ('6', 'MD000330', '全球连锁菜馆', '银河系', '银河系，地球', '18161712262', '2022-09-08 19:36:00', '3', '0');
INSERT INTO `store` VALUES ('7', 'MD000999', '小刘饭店', '浙江省杭州市', '旺田商务楼', '13912345678', '2022-09-24 19:18:00', '3', '正常');
INSERT INTO `store` VALUES ('8', 'MD000998', '食堂', '浙江省杭州市', '西湖', '16896325623', '2022-09-24 22:46:00', '1', '正常');
INSERT INTO `store` VALUES ('9', 'MD000666', '杭州小菜馆', '浙江省杭州市', '西湖', '19686546325', '2022-09-02 21:52:00', '5', '正常');
INSERT INTO `store` VALUES ('10', 'MD000909', '小郭饭店', '云南省大理市', '你猜', '16396541236', '2022-09-14 20:40:00', '10', '正常');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL auto_increment,
  `username` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456');
INSERT INTO `user` VALUES ('2', 'zhangsan1', '1234567');
