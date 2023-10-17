import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ArrowUpRight, Github } from 'lucide-react'

export interface ProjectCardProps {
    title: string;
    description: string;
    projectLink: string;
    projectSource: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, projectLink, projectSource }) => {
    console.log(projectLink)
    return (
        <Card className='w-[300px]'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className='flex gap-2 items-center justify-center'>
                <Button variant='outline' onClick={() => window.open(projectLink, '_self')}><ArrowUpRight className='h-[1.2rem] w-[1.2rem] mr-2'/>Preview</Button>
               <Button variant='default' onClick={() => window.open(projectSource, '_self')}><Github className='h-[1.2rem] w-[1.2rem] mr-2'/>Source</Button>
            </CardFooter>
        </Card>
    )
}

export { ProjectCard }
