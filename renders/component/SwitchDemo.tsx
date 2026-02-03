import React from 'react'
import { Switch } from "@/registry/new-york/ui/switch"

const SwitchDemo = () => {
  return (
      <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode" className='font-semibold'>Airplane Mode</label>
    </div>
  )
}

export default SwitchDemo