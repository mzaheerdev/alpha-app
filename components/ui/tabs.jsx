

export default function StatsTabs({
  tabs,
  activeTab,
  onChange,
}) {
  return (
    <div className="flex border-b border-primary-ex-light">
  {tabs.map(tab => {
    const isActive = activeTab === tab.key

    return (
      <button
        key={tab.key}
        onClick={() => onChange(tab.key)}
        className={`flex flex-1 items-center justify-center gap-1 pt-0.5 pb-2.5
          text-[12px] font-semibold leading-[130%] transition-colors
          ${
            isActive
              ? "text-primary border-b-[3px] border-secondary"
              : "text-[#535353]"
          }`}
      >
        <span>{tab.label}</span>
        <span className="text-[10px] font-normal leading-[130%]">
          ({tab.value})
        </span>
      </button>
    )
  })}
</div>

  )
}
