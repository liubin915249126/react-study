import React from 'react';
import { Button } from 'antd';
import { Helmet } from "react-helmet";

export default class Share extends React.Component {
    constructor(props) {
        super()
    }
    shareFB() {
        window.open(`https://www.facebook.com/sharer.php?u=www.baidu.com`);
    }
    twitter() {
        // window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${'share'} ${'shareUrl'}`)}`)
        window.open('http://twitter.com/share?url=' + encodeURIComponent('www.baidu.com') + '&text=' + encodeURIComponent('title'));
        // window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(111)).concat(' ').concat(encodeURIComponent('www.baidu.com')))   
    }
    render() {
        return <div>
            <Helmet>
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@site_username" />
                <meta name="twitter:title" content="Top 10 Things Ever" />
                <meta name="twitter:description" content="Up than 200 characters." />
                <meta name="twitter:creator" content="@creator_username" /> */}


                {/* <meta property="url" content="https://yooul.com/share/share.php?post_uuid=9463af08-660d-11ea-9965-4ffecca286d7&amp;locale=zh-CN&amp;hide=0" />
                <meta property="type" content="article" />
                <meta property="title" content="Netflix在午夜<br>有一些电影推荐吗？" />
                <meta property="description" content="Netflix在午夜<br>有一些电影推荐吗？" />
                <meta property="image" content="https://qnidyooulimage.mmantou.cn/FmQeJquE5Q_oMbGD_Td0Q8BjoRve.jpg?imageView2/2/w/200/h/200/interlace/1|imageslim" />
                <meta itemprop="image" content="https://qnidyooulimage.mmantou.cn/FmQeJquE5Q_oMbGD_Td0Q8BjoRve.jpg?imageView2/2/w/200/h/200/interlace/1|imageslim" /> */}

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@flickr" />
                <meta name="twitter:title" content="Small Island Developing States Photo Submission" />
                <meta name="twitter:description" content="View the album on Flickr." />
                <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />

                <meta name='og:image' content='http://www.menvscode.com/upload/41464238946737386.png' />
                {/* <meta name="twitter:image" content='http://www.menvscode.com/upload/41464238946737386.png' /> */}
            </Helmet>
            <Button type="primary" onClick={() => this.shareFB()}>facebook</Button>&nbsp;&nbsp;
            <Button type="primary" onClick={() => this.twitter()}>twitter</Button>
            <a class="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Hello%20world">
                Tweet</a>
        </div>
    }
}