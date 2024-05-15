import React from 'react'
import { Icon } from 'antd'

// data
import { excellentData, basicData, workData, projectData } from './data.js'

import './index.less'

const MyResume = () => {
  return (
    <div className="myResume">
      {/* 基本信息 */}
      <section className="basicInfo">
        <h3>
          <span>Dva</span>
          &nbsp; 前端工程师
        </h3>
        <div className="socialInfo">
          {basicData.map((item, index) => (
            <span key={index}>
              <Icon type={item.icon} />
              &nbsp;<a href="javascript:;">{item.title}</a>
            </span>
          ))}
          {/* <span>
            <Icon type="github" />
            &nbsp;
            <a href="https://github.com/liubin915249126" target="_blank">
              github
            </a>
          </span> */}
        </div>
      </section>
      {/* 个人优势 */}
      <section className="excellent">
        <h3 className="sectionTitle">个人优势</h3>
        {excellentData.map((item, index) => (
          <div>
            {index + 1}:{item.title}
          </div>
        ))}
      </section>
      {/* 工作经历 */}
      <section className="work">
        <h3 className="sectionTitle">工作经历</h3>
        {workData.map((item, index) => {
          return (
            <div className="workItem" key={index}>
              <div className="workTitle">
                <span className="bold">
                  {item.name} - {item.title}
                </span>
                <span className="time">{item.time}</span>
              </div>
              {/* {item.tip && <div className="tip">{item.tip}</div>} */}
              {item.jobs.map((item1, index1) => {
                const { techStack = [] } = item1
                return (
                  <div className="jobItem" key={index1}>
                    {index1 + 1}: {item1.title}
                    {item1.role && (
                      <div className="jobRole">- 主要职责: {item1.role}</div>
                    )}
                    {techStack.length > 0 && (
                      <div className="techStack">
                        - 技术栈: {techStack.join(' | ')}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
      {/* 主要项目经历 */}
      <section className="project">
        <h3 className="sectionTitle">主要项目经历</h3>
        {projectData.map((item, index) => {
          const { mainJobs, mainAchivements, techStack = [] } = item
          return (
            <div className="projectItem" key={index}>
              <div className="projectTitle">{item.title}</div>
              <div>
                <span className="subTitle">技术栈: </span>
                <span>{techStack.join(' | ')}</span>
              </div>
              <div>-- 项目背景和主要工作:</div>
              <div className="mainJobs">
                <div className="projectInfo">{item.projectInfo}</div>
                {Array.isArray(mainJobs) &&
                  mainJobs.map((item, index) => (
                    <div className="" key={index}>
                      {item}
                    </div>
                  ))}
              </div>
              <div>-- 主要成就:</div>
              <div className="mainJobs">
                {Array.isArray(mainAchivements) &&
                  mainAchivements.map((item, index) => (
                    <div className="" key={index}>
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          )
        })}
      </section>
      {/* 语言水平 */}
      <section className="tagWrap">
        <h3 className="sectionTitle">毕业院校/语言水平</h3>
        <div>
          <span className="tag">太原理工大学: 211 (2010-2014)</span> &nbsp;
          <span className="tag">专业: 热能与动力工程</span> &nbsp;
          {/* <span className="tag">英语 CET-4 </span> */}
          <span className="tag">生日: 1991.06 </span> &nbsp;
          <span className="tag">性别: 男 </span>
        </div>
      </section>
    </div>
  )
}

export default MyResume
