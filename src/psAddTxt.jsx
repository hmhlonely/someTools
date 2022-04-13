//ñ OTE：输入注释是可选的。// 你好 Word 脚本// 记住当前单位设置，然后将单位设置为// 此脚本期望的值

var originalUnit =preferences.rulerUnits
originalUnit.rulerUnits = Units.INCHES
// 创建一个新的 2x4 英寸文档并将其分配给一个变量
var docRef = app.documents.add(2, 4)
// 创建一个包含文本的新艺术层
var artLayerRef = docRef.artLayers.add()
artLayerRef.kind = LayerKind.TEXT
// 设置文本层的内容。
var textItemRef = artLayerRef.textItem
textItemRef.contents = "你好，世界"
// 释放引用文档参考 = 空
artLayerRef = null
textItemRef = null
// 恢复原始标尺单位设置app.preferences.rulerUnits = originalUni