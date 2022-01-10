# example whatsapp-web

## run

```bash
# install dependencies
npm i

# install chromium
cd node_modules/puppeteer
npm run install

# run project
npm start
```

## 相关问题与 bug

- sendButton 无效
- 有时候登录成功程序或者启动成功直接 done
- MessageMedia.fromUrl 不能使用
- 连接时间长有时候会导致消息收不到，但是 显示 ack 已读
- 加入群组时会出现错误 -> TypeError: Cannot read properties of undefined (reading 'match')


## exapmels

- !ping reply -> 回复 `!ping reply` 内容为 pong
- !ping -> pong
- !sendto 8617630802710@c.us message -> 向 8617630802710@c.us 发送消息，消息内容为 message (确保 8617630802710@c.us 是你的好友)
- !subject subject -> 在组内修改组主题为 subject
- !echo message -> 回复该消息，内容为 message
- !desc description -> 在组内修改组描述为 description
- !leave -> 离开当前组
- !join inviteCode -> 加入邀请码对应的组
- !groupinfo -> 获得当前群组的相关信息
- !chats -> 当前 bot 打开的 chat
- !info -> 当前 bot 的信息
- !mediainfo + photo -> 上传的 photo 照片
- !quoteinfo -> 回复时加入该信息，返回该信息相关状态 
- !resendmedia + photo -> 回复 photo // bug
- !location -> 返回一个定位
- !status -> 
- !mention -> 返回一个 艾特 自己的信息
- !delete -> 删除指定的信息
- !pin -> bot pin
- !archive -> bot archive
- !mute -> bot mute
- !typing -> bot typing
- !recording -> bot recording
- !clearstate -> bot clearstate
- !jumpto -> bot jumpto
- !buttons -> 返回 button 选择
- !lists -> 返回 list 选择

## debug

```bash
yarn start
# F5 in vscode
```