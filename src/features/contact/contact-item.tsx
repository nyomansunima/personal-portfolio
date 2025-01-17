'use client'

import * as React from 'react'
import { Button, toast } from '@shared/components'

export type ContactItemData = {
  href: string
  label: string
}

type ContactItemProps = {
  contact: ContactItemData
}

export function ContactItem({ contact }: ContactItemProps) {
  const { href, label } = contact
  const isEmail = href.includes('@gmail.com')

  function copyEmailToClipboard(): void {
    const email = href

    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast('Nice, Email already copied to clipboard')
      })
      .catch(() => {
        toast('Opps, Cannot copy the email')
      })
  }

  function handleOnClick(): void {
    if (isEmail) copyEmailToClipboard()
    else window.open(href)
  }

  return (
    <Button
      variant={'outline'}
      size={'base'}
      className="h-12 transition-all duration-300 hover:-translate-y-1 bg-surface text-[.8125rem]"
      onClick={handleOnClick}
    >
      {label}
    </Button>
  )
}
