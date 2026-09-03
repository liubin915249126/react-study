#### Claude Code

```sh
# 
# 编辑这个文件 
# sk-f316b91c173349ceb5dfbef2621b6

# https://v2.pincc.ai
#  sk-fb69595f95fc3de0fdd1398a7ca667df758aefa081fe749150a883467cb9d
#  ~/.claude/settings.json

#  claude --settings ~/.claude/settings.json
#  claude auth logout

# 没有的话新建一个 
touch  ~/.claude/settings.json
# 加入一下内容
{   
    "env":{
        "ANTHROPIC_BASE_URL": "https://yostoken.top/v1",
        # 你具体的 token
        "ANTHROPIC_AUTH_TOKEN": "sk-a19ab8ca9c1448f02aad89ddecadb34ddd77cc9b239137a46b0ae295e6859",
        "ANTHROPIC_MODEL":"claude-opus-5",
        "ANTHROPIC_SMALL_FAST_MODEL": "claude-opus-4-6"
    }
}
# 彻底关闭  Claude Code 在打开
```

#### codex

```sh
# 编辑这个文件 
~/.codex/config.toml     
# 没有的话新建一个 
touch ~/.codex/config.toml     
# 加入一下内容

[model_providers.tokenHubs]
name = "TokenHubs"
base_url = "https://yostoken.top/v1"
# 你具体的 token
experimental_bearer_token = 'sk-6af936edcab4d7d8017716105c4680241486c12c40c6aabf0451e6a'
wire_api = "responses"

# 彻底关闭  Claude Code 在打开
```

#### deepseek Harness

![alt text](image.png)

左下角->设置->模型
选 添加自定义提供方
Provider ID: tokenHubs
显示名称: tokenHubs
API 地址: 
API 协议: openai-responses
API 密钥: sk-xxx 

点击 获取可用模型
