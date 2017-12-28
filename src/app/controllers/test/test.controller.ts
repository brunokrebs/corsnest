import {Controller, Post, Get} from '@nestjs/common';

@Controller()
export class TestController {
    
    @Get()
    testGet(){
        return [];
    }
    
    @Post()
    testPost(){
        return [];
    }
}
