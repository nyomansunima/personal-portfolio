import Link from 'next/link'
import * as React from 'react'

export interface SupportData {
  title: string
  description: string
  url: string
}

interface SupportItemProps {
  data: SupportData
}

export function SupportItem({ data }: SupportItemProps): React.ReactElement {
  const { title, description, url } = data

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col gap-3 bg-surface p-3 border border-border rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative group"
    >
      <div className="flex items-center gap-2">
        <i className="fi fi-rr-circle-small" />
        <h3 className="text-sm font-medium text-wrap">{title}</h3>
      </div>

      <p className="text-sm text-foreground/60 !leading-6">{description}</p>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}