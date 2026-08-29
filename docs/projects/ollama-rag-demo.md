# 项目复盘：基于Ollama+FastAPI实现本地RAG

## 项目目标
本地部署大模型，实现私有文档问答，不调用第三方API。

## 技术选型
- Ollama：本地运行LLM与Embedding
- FastAPI：后端接口
- Chroma：轻量向量库
- LangChain：编排链路

## 遇到的问题
1. chunk分割不合理，召回无关文档
2. prompt没有做约束，模型容易幻觉

## 优化方案
1. 调整chunk_size、overlap参数
2. 增加rerank做结果重排
3. Prompt增加限定：只使用检索到的内容回答

## 不足与后续改进
- 没有实现文档增量更新
- 缺少监控日志
后续计划接入观测，优化链路性能。
