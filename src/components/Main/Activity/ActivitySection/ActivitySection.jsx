'use client'
import s from './ActivitySection.module.scss';
import DynamicBlock from '../DynamicBlock/DynamicBlock';
import StaticBlocks from '../StaticBlocks/StaticBlocks';
import { useSocket } from '@/hooks/useSocket';

const ActivitySection = () => {
  const { data, isDataLoaded } = useSocket();

  return (
    <section className={s.section}>
      <div className='container'>
        <div className={s.grid}>
          <h2 className={`${s.heading} heading-2`}>
            <span><span className='bold'>Javes</span> Activity</span>
            <span className={s.realTime}>Real time data</span>
          </h2>

          <DynamicBlock
            value={data.events.value}
            label='In-Game Events'
            isActive={data.events.isActive}
            modifier='events'
            isDataLoaded={isDataLoaded}
          />

          <DynamicBlock
            value={46.06}
            label='Av. Deal Value'
            isActive={false}
            modifier='dealValue'
            isDataLoaded={isDataLoaded}
          />

          <StaticBlocks modifier='element-1' />
          <StaticBlocks modifier='element-2' />

          <DynamicBlock
            value={data.deals.value}
            label='Deals with Pro-Players'
            isActive={data.deals.isActive}
            modifier='deals'
            isDataLoaded={isDataLoaded}
          />

          <DynamicBlock
            value={30}
            label='Online Games'
            isActive={false}
            modifier='games'
            isDataLoaded={isDataLoaded}
          />
          
          <StaticBlocks modifier='element-3' />
          <StaticBlocks modifier='element-4' />
          
          <DynamicBlock
            value={data.users.value}
            label='Javes Users'
            isActive={data.users.isActive}
            modifier='users'
            isDataLoaded={isDataLoaded}
          />
        </div>
      </div>
    </section>
  )
}

export default ActivitySection