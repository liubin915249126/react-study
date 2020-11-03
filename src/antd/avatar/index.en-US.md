---
category: Components
type: Data Display
title: Avatar
cover: https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg
---

Avatars can be used to represent people or objects. It supports images, `Icon`s, or letters.

## API

### Avatar

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| alt | This attribute defines the alternative text describing the image | string | - |  |
| gap | Letter type unit distance between left and right sides | number | 4 | 4.3.0 |
| icon | Custom icon type for an icon avatar | ReactNode | - |  |
| shape | The shape of avatar | `circle` \| `square` | `circle` |  |
| size | The size of the avatar | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.7.0 |
| src | The address of the image for an image avatar or image element | string \| ReactNode | - | ReactNode: 4.8.0 |
| srcSet | A list of sources to use for different screen resolutions | string | - |  |
| onError | Handler when img load error, return false to prevent default fallback behavior | () => boolean | - |  |

> Tip: You can set `icon` or `children` as the fallback for image load error, with the priority of `icon` > `children`

### Avatar.Group (4.5.0+)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| maxCount | Max avatars to show | number | - |  |
| maxPopoverPlacement | The placement of excess avatar Popover | `top` \| `bottom` | `top` |  |
| maxStyle | The style of excess avatar style | CSSProperties | - |  |
| size | The size of the avatar | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.8.0 |
