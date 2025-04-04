"use client"

import React from "react"
import { PortableText as SanityPortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded">
      {children}
    </span>
  )
}

const Callout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 border-l-4 border-blue-500 p-4 my-4 rounded-r">
      {children}
    </div>
  )
}

type TextEffectProps = {
  effect: "gradient" | "shadow" | "relief" | "animated"
  color?: string
  children: React.ReactNode
}

const TextEffect = ({ effect, color, children }: TextEffectProps) => {
  switch (effect) {
    case "gradient":
      return (
        <span 
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600" 
          style={color ? { backgroundImage: `linear-gradient(to right, ${color}, #4338ca)` } : undefined}
        >
          {children}
        </span>
      )
    case "shadow":
      return (
        <span 
          className="text-gray-800 drop-shadow-lg" 
          style={color ? { color, textShadow: "2px 2px 4px rgba(0,0,0,0.3)" } : undefined}
        >
          {children}
        </span>
      )
    case "relief":
      return (
        <span 
          className="font-bold" 
          style={{ 
            color: color || "#2563eb", 
            textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff"
          }}
        >
          {children}
        </span>
      )
    case "animated":
      return (
        <span className="relative inline-block">
          <span 
            className="animate-pulse" 
            style={color ? { color } : undefined}
          >
            {children}
          </span>
        </span>
      )
    default:
      return <>{children}</>
  }
}

const CustomLink = ({ value, children }: any) => {
  const href = value?.href || '#'
  const target = value?.blank ? '_blank' : undefined
  
  return (
    <Link href={href} target={target} className="text-blue-600 hover:underline">
      {children}
    </Link>
  )
}

const CustomImage = ({ value }: any) => {
  if (!value?.asset?._ref) {
    return null
  }

  return (
    <div className="my-8 relative">
      <Image 
        src={value.asset.url}
        alt={value.alt || ''} 
        width={800}
        height={500}
        className="mx-auto rounded-lg shadow-md"
      />
      {value.caption && (
        <div className="text-center text-gray-500 mt-2 text-sm">
          {value.caption}
        </div>
      )}
    </div>
  )
}

const components = {
  types: {
    image: CustomImage,
  },
  block: {
    normal: ({ children }: { children: React.ReactNode }) => <p className="my-4">{children}</p>,
    h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-3xl font-light mt-8 mb-4">{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-light mt-6 mb-3">{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-xl font-normal mt-5 mb-2">{children}</h3>,
    h4: ({ children }: { children: React.ReactNode }) => <h4 className="text-lg font-normal mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    highlighted: ({ children }: { children: React.ReactNode }) => <HighlightedText>{children}</HighlightedText>,
    callout: ({ children }: { children: React.ReactNode }) => <Callout>{children}</Callout>,
  },
  marks: {
    link: CustomLink,
    "strike-through": ({ children }: { children: React.ReactNode }) => <del>{children}</del>,
    highlight: ({ children }: { children: React.ReactNode }) => (
      <span className="bg-yellow-200 px-1">{children}</span>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-gray-100 font-mono text-sm p-1 rounded">{children}</code>
    ),
    textEffect: ({ value, children }: any) => (
      <TextEffect effect={value.effect} color={value.color}>{children}</TextEffect>
    ),
  },
}

type PortableTextProps = {
  value: any
  className?: string
}

export function PortableText({ value, className }: PortableTextProps) {
  if (!value) {
    return null
  }

  return (
    <div className={cn("prose prose-slate max-w-none", className)}>
      <SanityPortableText value={value} components={components} />
    </div>
  )
} 