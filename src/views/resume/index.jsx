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
          <span>len</span>
          &nbsp; Front-End Engineer
        </h3>
        <div className="socialInfo">
          {basicData.map((item, index) => (
            <span key={index}>
              <Icon type={item.icon} />
              &nbsp;<a href="javascript:;">{item.title}</a>
            </span>
          ))}
          <span>
            <Icon type="github" />
            &nbsp;
            <a href="https://github.com/liubin915249126" target="_blank">
              github
            </a>
          </span>
        </div>
      </section>
      {/* 个人优势 */}
      <section className="excellent">
        <h3 className="sectionTitle">Personal Advantage</h3>
        {excellentData.map((item, index) => (
          <div>
            {index + 1}:{item.title}
          </div>
        ))}
      </section>
      {/* 工作经历 */}
      <section className="work">
        <h3 className="sectionTitle">Work Experience</h3>
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
                      <div className="jobRole">- Main Duty: {item1.role}</div>
                    )}
                    {techStack.length > 0 && (
                      <div className="techStack">
                        - Technology Stack: {techStack.join(' | ')}
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
        <h3 className="sectionTitle">Main Project Experience</h3>
        {projectData.map((item, index) => {
          const { mainJobs, mainAchivements, techStack = [] } = item
          return (
            <div className="projectItem" key={index}>
              <div className="projectTitle">{item.title}</div>
              <div>
                <span className="subTitle">Technology Stack: </span>
                <span>{techStack.join(' | ')}</span>
              </div>
              <div>-- Project Background And Main Work:</div>
              <div className="mainJobs">
                <div className="projectInfo">{item.projectInfo}</div>
                {Array.isArray(mainJobs) &&
                  mainJobs.map((item, index) => (
                    <div className="" key={index}>
                      {item}
                    </div>
                  ))}
              </div>
              <div>-- Major Achievements:</div>
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
        <h3 className="sectionTitle">Graduation School/Language Level</h3>
        <div>
          <span className="tag">Taiyuan University of Technology: 211</span>
          &nbsp;
          <span className="tag">Thermal and Power Engineering</span> &nbsp;
          <span className="tag">English CET-4 </span>
        </div>
      </section>
    </div>
  )
}

export default MyResume
