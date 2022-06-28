import {Photo} from './Photo'
import {InfoSection} from './InfoSection'
import {SkillsSection} from './SkillsSection'
import {NameSection} from './NameSection'
import {ProfileSection} from './ProfileSection'
import {EmploymentHistorySection} from './EmploymentHistorySection'
import {EducationSection} from './EducationSection'

export const Resume = props => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <Photo />
        <InfoSection />
        <SkillsSection />
      </div>

      <div className="col-span-2">
        <NameSection />
        <ProfileSection />
        <EmploymentHistorySection />
        <EducationSection />
      </div>
    </div>
  )
}